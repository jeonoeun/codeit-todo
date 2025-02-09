"use client";

interface InputProps {
  mode: "detail" | "add";
  text: string;
  onChange: (value: string) => void;
}

const Input = ({ mode, text, onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={mode === "add" ? "할 일을 입력해주세요" : undefined}
      className={`input-base input-${mode}`}
    />
  );
};

export default Input;
