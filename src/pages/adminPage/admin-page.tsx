import { Container } from "../../components/index.js";
import { ColumnsType } from "antd/es/table/InternalTable";
import { Table } from "antd";
import { SaveItem } from "./components/saveItem.js";
import { useAppDispatch, useAppSelector } from "../../app/hooks.js";
import { getAllIdeas } from "../../app/selectors/ideas.js";
import { useEffect } from "react";
import { fetchIdeas } from "../../app/actions/ideas.js";

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const allIdeas = useAppSelector(getAllIdeas);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, []);

  const columns: ColumnsType<any> = [
    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Название идеи",
      dataIndex: "ideaName",
      key: "ideaName",
    },
    {
      title: "Идея",
      dataIndex: "idea",
      key: "idea",
    },
    {
      title: "Местоположение",
      dataIndex: "coordinates",
      key: "coordinates",
      render: (coords) => (
        <p>
          {coords?.lat}, {coords?.lng}
        </p>
      ),
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Отношение к городу",
      dataIndex: "relation",
      key: "relation",
    },
    {
      title: "Контакты",
      dataIndex: "contacts",
      key: "contacts",
    },
    {
      title: "Модерация",
      dataIndex: "_id",
      key: "contacts",
      render: (_, record) => <SaveItem item={record} />,
    },
  ];

  return (
    <Container>
      <Table columns={columns} dataSource={allIdeas || undefined} />
    </Container>
  );
};
