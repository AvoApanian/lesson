import "./button.css";

interface ButtonProps {
  click: () => void;
}

function Button({ click }: ButtonProps) {
  return (
    <div className="button-container">
      <button onClick={click} className="btn">
        Enter a value
      </button>
    </div>
  );
}

export default Button;
