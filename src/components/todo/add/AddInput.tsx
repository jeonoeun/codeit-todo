import Input from "@/components/common/Input";

interface AddInputProps {
  name: string;
  onChange: (value: string) => void;
}

const AddInput = ({ name, onChange }: AddInputProps) => {
  return (
    <div className="todo-item todo-add">
      <Input mode="add" text={name} onChange={onChange} />
    </div>
  );
};

export default AddInput;
