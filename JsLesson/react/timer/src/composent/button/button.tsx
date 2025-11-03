import "./button.css"

interface ButtonProps {
  index: number;
  activeIndex: number | null;
  onClick: (index: number) => void;
  defaultText: string;
  addText: string;
}

export function Button({ index, activeIndex, onClick, defaultText, addText }: ButtonProps) {
  const isActive = activeIndex === index;

  return (
    <button

      onClick={() => onClick(index)}

    >
      {defaultText}{isActive ? addText : ""}
    </button>
  );
}
