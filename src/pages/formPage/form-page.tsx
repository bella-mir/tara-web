import {
  Form,
  Select,
  Button,
  Input,
  Modal,
  Radio,
  // message,
  // Upload,
} from "antd";
import { Container } from "../../components/index.js";
import styles from "./form-page.module.scss";
import { MiniMap } from "./components/mini-map";
import { FormContext } from "./formContext";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks.js";
import { postIdea } from "../../app/actions/ideas.js";
// import Icon, { UploadOutlined } from "@ant-design/icons";
import { AGES, CATEGORIES, RELATION } from "../../utils/app-constants.js";

export const FormPage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  // const [imageFile, setImageFile] = useState<File | null>(null);
  const [formMode, setFormMode] = useState<string>("idea");
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

  const success = () => {
    Modal.success({
      content:
        "Спасибо, что поделились своими идеями и помогаете стать Таре лучше. После проверки модератором ваши идеи появятся на сайте",
    });
    form.resetFields();
  };

  const onFinish = (values: any) => {
    dispatch(postIdea({ ...values, coordinates, formMode })).then(() =>
      success()
    );
  };

  // // Function to handle file size validation
  // const beforeUpload = (file: File) => {
  //   const isLt5M = file.size / 1024 / 1024 < 5;
  //   if (!isLt5M) {
  //     message.error("Изображение должно быть меньше 5мб");
  //   }
  //   return isLt5M || Upload.LIST_IGNORE;
  // };

  // const handleImageChange = (info: any) => {
  //   if (info.file.status === "done" || info.file.status === "uploading") {
  //     setImageFile(imageFile);
  //   }
  // };

  return (
    <FormContext.Provider value={{ coordinates, setCoordinates }}>
      <Container>
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
              {/* <Form.Item
                name="image"
                label="Загрузите изображение"
                tooltip="до 5 Мб"
              >
                <Upload
                  name="image"
                  listType="picture"
                  beforeUpload={beforeUpload}
                  maxCount={1}
                  onChange={handleImageChange}
                >
                  <Button icon={<UploadOutlined />}>Добавить</Button>
                </Upload>
              </Form.Item> */}

              {/* <Form.Item
                name="image"
                label="Загрузите изображение"
                tooltip="до 5 Мб"
              >
                <Upload
                  accept=".png, .jpg"
                  showUploadList={false}
                  beforeUpload={(file) => {
                    const reader = new FileReader();

                    reader.onload = (e) => {
                      console.log(e.target.result);
                    };
                    reader.readAsText(file);

                    // Prevent upload
                    return false;
                  }}
                >
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>
                ;
              </Form.Item> */}

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
