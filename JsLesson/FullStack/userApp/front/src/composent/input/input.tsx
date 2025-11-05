import React from "react";
import "./input.css"

interface InpPropio {
  types: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderValue: string;
}

function Input({ types, onchange, placeholderValue }: InpPropio) {
  return (
    <>
      <input
        type={types}
        onChange={onchange}
        placeholder={`Enter your ${placeholderValue}`}
      />
    </>
  );
}

export default Input;
