import { Form, Button, Input } from "antd";
import { Container } from "../../components/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks.js";
import { loginUser } from "../../app/actions/auth.js";

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    dispatch(loginUser({ ...values })).then(() => {
      navigate("/admin");
    });
  };

  return (
    <Container>
      <h2>Вход администратора</h2>
      <Form
        name="validate_other"
        layout="vertical"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Укажите, пожалуйста, email",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
              message: "Укажите, пожалуйста, пароль",
              whitespace: true,
            },
          ]}
        >
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center", marginTop: "20" }}>
        <p>
          Если вы не администратор, вернитесь, пожалуйста, на главную страницу
          :)
        </p>
        <Link to={"/"} style={{ color: "#F08332" }}>
          Вернуться
        </Link>
      </div>
    </Container>
  );
};
