import "./input.css";

interface InputProps {
  onChange: (value: string) => void;
}

function Input({ onChange }: InputProps) {
  return (
    <section className="input-container">
      <input 
        type="text"
        placeholder="Enter a text"
        onChange={(e) => onChange(e.target.value)}
        className="text-input"
      />
    </section>
  );
}

export default Input;
