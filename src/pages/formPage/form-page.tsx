import { Form, Select, Button, Input, Modal, Radio } from "antd";
import { Container } from "../../components/index.js";
import styles from "./form-page.module.scss";
import { MiniMap } from "./components/mini-map";
import { FormContext } from "./formContext";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks.js";
import { postIdea } from "../../app/actions/ideas.js";
import { AGES, CATEGORIES, RELATION } from "../../utils/app-constants.js";

export const FormPage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [formMode, setFormMode] = useState<string>("idea");
  // const [image, setImage] = useState<File | null>(null);
  // const [imagePreview, setImagePreview] = useState<string | null>(null);
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

  // // Handle file input change
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files ? e.target.files[0] : null;
  //   if (file) {
  //     if (file.size > 5 * 1024 * 1024) {
  //       // 5MB limit
  //       message.error("Файл слишком большой. Максимальный размер — 5MB.");
  //       return;
  //     }
  //     if (!file.type.startsWith("image/")) {
  //       message.error("Только изображения допустимы.");
  //       return;
  //     }
  //     setImage(file);
  //     setImagePreview(URL.createObjectURL(file)); // Create a preview URL
  //     console.log(imagePreview);
  //   }
  // };

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
              {/* <div className={styles.fileUpload}>
                <label htmlFor="image">Загрузите изображение:</label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className={styles.imagePreview}
                  />
                )}
              </div> */}
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
