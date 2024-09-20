import { Container } from "../../components/index.js";
import { ColumnsType } from "antd/es/table/InternalTable";
import { Table } from "antd";
import { SaveItem } from "./components/saveItem.js";
import { useAppDispatch, useAppSelector } from "../../app/hooks.js";
import { getAllIdeas } from "../../app/selectors/ideas.js";
import { useEffect } from "react";
import { fetchIdeas } from "../../app/actions/ideas.js";
import styles from "./admin-page.module.scss";
import { CSVLink } from "react-csv";
import {
  getAgeLabel,
  getCategoryLabel,
  getFormMode,
  getRelationLabel,
} from "./admin-page-utils.js";
import { LogoutButton } from "./components/logoutButton.js";

export const AdminPage = () => {
  const dispatch = useAppDispatch();
  const allIdeas = useAppSelector(getAllIdeas);

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, []);

  const columns: ColumnsType<any> = [
    {
      title: "Тип ответа",
      dataIndex: "formMode",
      key: "formMode",
      render: (formMode) => getFormMode(formMode),
    },
    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
      render: (categroyValue) => getCategoryLabel(categroyValue),
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
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age",
      render: (age) => getAgeLabel(age),
    },
    {
      title: "Отношение к городу",
      dataIndex: "relation",
      key: "relation",
      render: (relation) => getRelationLabel(relation),
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
      <Table
        columns={columns}
        dataSource={allIdeas || undefined}
        className={styles.table}
        scroll={{ x: "max-content" }}
      />
      {allIdeas && (
        <CSVLink
          filename={`tara_data_${formattedDate}.csv`}
          data={allIdeas}
          className="btn btn-primary"
        >
          Export to CSV
        </CSVLink>
      )}
      <LogoutButton />
    </Container>
  );
};
