import { Button } from "antd";
import { confirmIdea } from "../../../app/actions/ideas";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useState, useCallback, useEffect } from "react";
import { getIdeaById } from "../../../app/selectors/ideas";

interface Item {
  _id: string;
  confirmed: boolean;
}

export const SaveItem = ({ item }: { item: Item }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { _id } = item;

  // Local state to handle re-rendering
  const [confirmed, setConfirmed] = useState(item.confirmed);

  // Fetch current state from Redux
  const currentItem = useAppSelector((state) => getIdeaById(state, _id));

  useEffect(() => {
    if (currentItem) {
      setConfirmed(currentItem.confirmed);
    }
  }, [currentItem]);

  const onConfirmClick = useCallback(async () => {
    setLoading(true);
    try {
      await dispatch(confirmIdea({ itemId: _id, confirmed: !confirmed }));
      // After dispatching, force a re-render by updating local state
      setConfirmed(!confirmed);
    } finally {
      setLoading(false);
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

// import { Button } from "antd";
// import { confirmIdea } from "../../../app/actions/ideas";
// import { useAppDispatch } from "../../../app/hooks";
// import { useState, useCallback } from "react";

// interface Item {
//   _id: string;
//   confirmed: boolean;
// }

// export const SaveItem = ({ item }: { item: Item }) => {
//   const dispatch = useAppDispatch();
//   const [loading, setLoading] = useState(false);
//   const { _id, confirmed } = item;

//   const onConfirmClick = useCallback(async () => {
//     setLoading(true);
//     try {
//       await dispatch(confirmIdea({ itemId: _id, confirmed: !confirmed }));
//     } finally {
//       setLoading(false);
//     }
//   }, [dispatch, _id, confirmed]);

//   return (
//     <>
//       <Button onClick={onConfirmClick} loading={loading}>
//         {confirmed ? "Удалить" : "Подтвердить"}
//       </Button>
//     </>
//   );
// };
