import { useDragInput } from "../../../hooks/use-drag-input.hook";
import Input from "../../Input/Input";

const DragInput = ({ value = 1, onChange, onMouseDown }) => {
  const setValue = useDragInput(value, onMouseDown);
  return (
    <Input
      object
      removeSpin
      type={"text"}
      inputmode='numeric'
      pattern='[0-9]*'
      step={0.01}
      value={Number(value)}
      onMouseDown={setValue}
      onChange={(e) => {
        onChange(Number(e.target.value));
      }}
    />
  );
};

export default DragInput;
