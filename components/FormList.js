import "./FormList.css";
import FormItem from "./FormItem";

const FormList = (props) => {
  return (
    <div className="form-list">
      {props.itemsData.map((item) => (
        <FormItem key={item.id} input={item.input} />
      ))}
    </div>
  );
};

export default FormList;
