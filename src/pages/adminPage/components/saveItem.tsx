import { Button } from "antd";
import { confirmIdea } from "../../../app/actions/ideas";
import { useAppDispatch } from "../../../app/hooks";
import { useState, useCallback } from "react";

interface Item {
  _id: string;
  confirmed: boolean;
}

export const SaveItem = ({ item }: { item: Item }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { _id, confirmed } = item;

  const onConfirmClick = useCallback(async () => {
    setLoading(true); // Set loading to true while dispatching the action
    try {
      await dispatch(confirmIdea({ itemId: _id, confirmed: !confirmed }));
    } finally {
      setLoading(false); // Always reset loading state after dispatch
    }
  }, [dispatch, _id, confirmed]);

  return (
    <>
      <Button onClick={onConfirmClick} loading={loading}>
        {confirmed ? "Удалить" : "Подтвердить"}
      </Button>
    </>
  );
};
