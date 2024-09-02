import { Form, Select, Button, Input, Modal } from "antd";
import { Container } from "../../components/index.js";
import { AGES, CATEGORIES, RELATION } from "./form-constants";
import styles from "./form-page.module.scss";
import { MiniMap } from "./components/mini-map";
import { FormContext } from "./formContext";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks.js";
import { postIdea } from "../../app/actions/ideas.js";

export const FormPage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const success = () => {
    Modal.success({
      content:
        "Спасибо, что поделились своим мнением и помогаете стать Уссурийску лучше. Оно будет опубликовано на портале после проверки модератором.",
    });
    form.resetFields();
  };

  const onFinish = (values: any) => {
    dispatch(postIdea({ ...values, coordinates })).then(() => success());
  };
  const [coordinates, setCoordinates] = useState<{ lng: number; lat: number }>({
    lat: 43.8,
    lng: 131.95,
  });

  return (
    <FormContext.Provider value={{ coordinates, setCoordinates }}>
      <Container>
        <h2>Какой вы хотите видеть Тару?</h2>
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
                <Select placeholder="Выберете категорию" options={CATEGORIES} />
              </Form.Item>
              <Form.Item
                name="location"
                label="Местоположение"
                tooltip="Переместите маркер, чтобы выбрать нужную локацию"
                style={{ margin: 0 }}
              >
                <MiniMap />
                <p>
                  Перетащите маркер, чтобы выбрать конкретную локацию. Карту
                  можно приближать, отдалять (и даже крутить)
                </p>
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
                label="Ваша идея"
                tooltip="Расскажите, как город может стать лучше"
                rules={[{ required: true, message: "Опишите идею" }]}
              >
                <Input.TextArea showCount maxLength={1000} />
              </Form.Item>
              <Form.Item
                name="name"
                label="Имя"
                rules={[
                  {
                    required: true,
                    message: "Укажите, пожалуйста, имя",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="age"
                label="Возраст"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Выберете вашу возрастную категорию",
                  },
                ]}
              >
                <Select
                  placeholder="Выберете вашу возрастную категорию"
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
                name="contacts"
                label="Контакты"
                tooltip="Вы можете отставить свои контакты, и мы свяжемся с вами при необходимости"
              >
                <Input />
              </Form.Item>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.column}></div>
            <div className={styles.column}>
              <Form.Item className={styles.button}>
                <Button type="primary" size="large" htmlType="submit">
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
