import Input from "../common/Input";

interface TodoAddInputProps {
  name: string;
  onChange: (value: string) => void;
}

const TodoAddInput = ({ name, onChange }: TodoAddInputProps) => {
  return (
    <div className="todo-item todo-add">
      <Input mode="add" text={name} onChange={onChange} />
    </div>
  );
};

export default TodoAddInput;
