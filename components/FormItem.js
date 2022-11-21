import "./FormItem.css";
import React, { useState } from "react";

const FormItem = (props) => {
  console.log(props);
  const [inputStyle, setInputStyle] = useState("none");
  const [inputColor, setInputColor] = useState("#000");

  const handelCheckbox = (e) => {
    setInputStyle("line-through");
    setInputColor("#777");
  };
  //const handelClosingInput = (e) => {
  //  console.log(`nice`);
  //};
  return (
    <div className="form-item">
      <input
        onClick={handelCheckbox}
        className="form-item__checkbox"
        type="checkbox"
      ></input>
      <p value={props.input} className="form-item__text">
        <span style={{ textDecoration: inputStyle, color: inputColor }}>
          {props.input}
        </span>
      </p>
    </div>
  );
};

export default FormItem;
//onClick={handelClosingInput}
