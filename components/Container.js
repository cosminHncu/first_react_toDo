import "./Container.css";
import FormItems from "./FormItems";
import FormList from "./FormList";
import React, { useState } from "react";

const Container = (props) => {
  const [items, setItems] = useState([]);
  const saveItemData = (data) => {
    const itemData = {
      ...data,
      id: Math.random() * 10 + 1,
    };
    setItems((prevItems) => {
      return [itemData, ...prevItems];
    });
  };
  return (
    <div className="container">
      <FormItems onSaveItemData={saveItemData} />
      <FormList itemsData={items} />
    </div>
  );
};

export default Container;
