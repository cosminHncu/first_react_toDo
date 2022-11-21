import "./FormItems.css";

import React, { useState } from "react";

const FormItems = (props) => {
  const [input, setInput] = useState(" ");
  const handelChangingInput = (e) => {
    setInput(e.target.value);
  };
  const handelInput = (e) => {
    e.preventDefault();
    setInput("");
    const inputObj = {
      input: input,
    };
    props.onSaveItemData(inputObj);
  };
  return (
    <div className="form-items">
      <form onSubmit={handelInput} className="form-items__container">
        <label className="form-items__label">Add items : </label>
        <input
          value={input}
          onChange={handelChangingInput}
          type="text"
          className="form-items__input"
        />
      </form>
    </div>
  );
};

export default FormItems;
