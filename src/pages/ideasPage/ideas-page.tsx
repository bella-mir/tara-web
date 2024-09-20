import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Container, Preloader } from "../../components";
import { fetchIdeas } from "../../app/actions/ideas";
import { getConfirmedIdeas, getLoadStatus } from "../../app/selectors/ideas";
import { IdeaCard } from "./components/ideaCard/ideaCard";
import styles from "./ideas-page.module.scss";
import { Alert, Badge, Select } from "antd";
import { CATEGORIES_AND_ALL } from "../../utils/app-constants";
import { useSelector } from "react-redux";
import { IIdeaState } from "../../app/types";

export const IdeasPage = () => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState("all");
  const loadStatus = useSelector(getLoadStatus);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, []);

  const selectedIdeas = useAppSelector(getConfirmedIdeas);

  const ideasToShow = selectedIdeas?.filter((item) =>
    category === "all" ? true : item.category === category
  );

  return (
    <>
      <Container className={styles.container}>
        <div className={styles.title}>
          <h2>Ваши идеи</h2>

          <Badge
            count={ideasToShow?.length}
            style={{ backgroundColor: "#939598" }}
            overflowCount={1000}
          />
        </div>
        <div className={styles.inner}>
          {loadStatus === "pending" ? (
            <Preloader />
          ) : (
            <>
              <Select
                options={CATEGORIES_AND_ALL}
                style={{ minWidth: 300 }}
                value={category}
                onChange={(value) => {
                  setCategory(value);
                }}
              />
              <div className={styles.cards}>
                {ideasToShow && ideasToShow?.length > 0 ? (
                  ideasToShow.map((item: IIdeaState, i: number) => (
                    <IdeaCard cardId={item._id} key={i} />
                  ))
                ) : (
                  <Alert
                    message="Нет предложений в данной категории"
                    type="warning"
                  />
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};
