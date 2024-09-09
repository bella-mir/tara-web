import { Radio } from "antd";
import { IdeasPage } from "../ideasPage";
import { MapPage } from "../mapPage";
import styles from "./mapFinalPage.module.scss";
import { useState } from "react";

export const MapFinalPage = () => {
  const [formMode, setFormMode] = useState<string>("map");

  // Handle radio button change
  const handleRadioChange = (e: any) => {
    setFormMode(e.target.value); // Save the selected value to state
  };

  return (
    <>
      <Radio.Group
        optionType="button"
        buttonStyle="solid"
        className={styles.mode}
        onChange={handleRadioChange}
        value={formMode}
      >
        <Radio.Button value="map">Карта</Radio.Button>
        <Radio.Button value="list">Список</Radio.Button>
      </Radio.Group>

      {formMode == "map" ? <MapPage /> : <IdeasPage />}
    </>
  );
};
