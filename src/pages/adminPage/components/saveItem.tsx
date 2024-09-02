import Button from "antd/es/button";
import { confirmIdea } from "../../../app/actions/ideas";
import { useAppDispatch } from "../../../app/hooks";

export const SaveItem = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch();

  const onConfirmClick = () => {
    dispatch(confirmIdea({ itemId: item._id, confirmed: !item.confirmed }));
  };

  return (
    <>
      <Button onClick={onConfirmClick}>
        {!item?.confirmed ? "Подтвердить" : "Удалить"}
      </Button>
    </>
  );
};
