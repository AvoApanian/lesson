import "./input.css"

interface InputProps {
  type: string;
  onChange: (value: string) => void;
  placeholderData:string;
}

function Input({ type, onChange , placeholderData}: InputProps) {
  return (
    <input
      type={type}
      onChange={(e) => onChange(e.target.value)}
      placeholder={`Enter your ${placeholderData}`}
    />
  );
}

export default Input;