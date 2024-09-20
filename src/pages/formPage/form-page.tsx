import {
  Form,
  Select,
  Button,
  Input,
  Modal,
  Radio,
  message,
  Upload,
} from "antd";
import { Container } from "../../components/index.js";
import styles from "./form-page.module.scss";
import { MiniMap } from "./components/mini-map";
import { FormContext } from "./formContext";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks.js";
import { postIdea } from "../../app/actions/ideas.js";
import { AGES, CATEGORIES, RELATION } from "../../utils/app-constants.js";
import { storage } from "../../app/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase functions
import { UploadOutlined } from "@ant-design/icons";
import type { RcFile } from "antd/es/upload/interface";

export const FormPage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [formMode, setFormMode] = useState<string>("idea");
  const [imageUrl, setImageUrl] = useState<string | null>(null); // Save Firebase URL
  const [loading, setLoading] = useState<boolean>(false); // Loading state for the upload
  const [coordinates, setCoordinates] = useState<{
    lng: number;
    lat: number;
  }>({
    lat: 56.9,
    lng: 74.4,
  });

  // Handle radio button change
  const handleRadioChange = (e: any) => {
    setFormMode(e.target.value); // Save the selected value to state
  };

  // Handle Firebase image upload and get URL
  const uploadImageToFirebase = async (file: RcFile) => {
    setLoading(true);
    try {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setImageUrl(downloadURL);
      setLoading(false);
      message.success("Изображение успешно загружено");
    } catch (error) {
      message.error("Ошибка при загрузке изображения");
      console.error("Error uploading image: ", error);
      setLoading(false);
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isImage = file.type.startsWith("image/");
    const isLt5M = file.size / 1024 / 1024 < 5;
    const validImageTypes = ["image/jpeg", "image/png"];

    if (!isImage) {
      message.error("Можно загружать только изображения.");
      return Upload.LIST_IGNORE;
    }

    if (!validImageTypes.includes(file.type)) {
      message.error(
        `${file.name} не является допустимым типом изображения. Допустимы только JPG и PNG.`
      );
      return Upload.LIST_IGNORE;
    }

    if (!isLt5M) {
      message.error("Файл должен быть меньше 5MB.");
      return Upload.LIST_IGNORE;
    }

    return true; // Если всё ок, разрешаем загрузку
  };

  // Custom request handler for Upload component
  const customRequest = async ({ file, onSuccess, onError }: any) => {
    try {
      await uploadImageToFirebase(file);
      onSuccess(null, file); // Indicate success to the Upload component
    } catch (error) {
      onError(error); // Indicate error to the Upload component
    }
  };

  const onRemove = () => {
    setImageUrl(null);
  };

  // Form success modal
  const success = () => {
    Modal.success({
      content:
        "Спасибо, что поделились своими идеями и помогаете стать Таре лучше. После проверки модератором ваши идеи появятся на сайте",
    });
    form.resetFields();
  };

  // Form submission handler
  const onFinish = (values: any) => {
    dispatch(
      postIdea({
        ...values,
        coordinates,
        formMode,
        image: imageUrl,
      })
    ).then(() => success());
    setImageUrl(null);
  };

  return (
    <FormContext.Provider value={{ coordinates, setCoordinates }}>
      <Container className={styles.container}>
        <div className={styles.row}>
          <h2>Какой вы хотите видеть Тару?</h2>
        </div>
        <Radio.Group
          className={styles.radio}
          onChange={handleRadioChange}
          value={formMode}
        >
          <Radio.Button value="idea" className={styles.radioButton}>
            Идея
          </Radio.Button>
          <Radio.Button value="problem" className={styles.radioButton}>
            Проблема
          </Radio.Button>
        </Radio.Group>

        <Form
          name="validate_other"
          layout="vertical"
          onFinish={onFinish}
          form={form}
        >
          <div className={styles.form}>
            <div className={styles.column}>
              <Form.Item
                name="category"
                label="Категория"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Необходимо выбрать категорию идеи",
                  },
                ]}
              >
                <Select placeholder="Выберите категорию" options={CATEGORIES} />
              </Form.Item>
              <Form.Item
                name="location"
                label="Местоположение"
                tooltip="Переместите маркер, чтобы выбрать нужную локацию"
                style={{ margin: 0 }}
              >
                <MiniMap />
                <p>
                  Перетащите маркер, чтобы выбрать конкретную локацию или
                  укажите адрес
                </p>
              </Form.Item>
              <Form.Item name="address" label="Адрес" tooltip="Укажите адрес">
                <Input maxLength={500} />
              </Form.Item>
            </div>
            <div className={styles.column}>
              <Form.Item
                name="ideaName"
                label="Название"
                tooltip="Придумайте короткое название для идеи"
                rules={[{ required: true, message: "Укажите название" }]}
              >
                <Input maxLength={500} />
              </Form.Item>
              <Form.Item
                name="idea"
                label="Ваша идея или описание проблемы"
                tooltip="Расскажите, как город может стать лучше"
                rules={[{ required: true, message: "Опишите идею" }]}
              >
                <Input.TextArea showCount maxLength={1000} />
              </Form.Item>

              <Form.Item
                name="age"
                label="Ваш возраст"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Выберите вашу возрастную категорию",
                  },
                ]}
              >
                <Select
                  placeholder="Выберите вашу возрастную категорию"
                  options={AGES}
                />
              </Form.Item>

              <Form.Item
                name="relation"
                label="Связь с городом"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Почему вам важно развитие города?",
                  },
                ]}
              >
                <Select
                  placeholder="Почему вам важно развитие города?"
                  options={RELATION}
                />
              </Form.Item>

              <Form.Item
                label="Добавьте изображение"
                tooltip="Пожалуйста, загрузите изображение"
              >
                <Upload
                  accept="image/*"
                  customRequest={customRequest}
                  beforeUpload={beforeUpload}
                  onRemove={onRemove}
                  maxCount={1}
                  listType="picture"
                >
                  <Button icon={<UploadOutlined />}>
                    Загрузить изображение
                  </Button>
                </Upload>
              </Form.Item>
            </div>
          </div>

          <div className={styles.form}>
            <div className={styles.column}></div>
            <div className={styles.column}>
              <Form.Item className={styles.button}>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className={styles.buttonElement}
                  loading={loading}
                >
                  Рассказать
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Container>
    </FormContext.Provider>
  );
};
