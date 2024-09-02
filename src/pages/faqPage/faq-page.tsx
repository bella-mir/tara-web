import { Avatar, List } from "antd";
import { Container } from "../../components";
import { FAQ } from "./faq-page-constants";

export const FaqPage = () => {
  return (
    <Container>
      <h2>Вопросы и ответы</h2>

      <List
        itemLayout="horizontal"
        dataSource={FAQ}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              // avatar={<Avatar src={tiger} size="large" />}
              title={item.question}
              description={item.answer}
            />
          </List.Item>
        )}
      />
    </Container>
  );
};
