import { useEffect, useState } from "react";
import "./App.css";
import { Headers } from "./composent/header/header";
import { Button } from "./composent/button/button";

function App() {
  const [time, setTimer] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimer(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Headers timer={time} />

      <div>
        <Button
          index={0}
          activeIndex={activeIndex}
          onClick={handleClick}
          defaultText="HTML"
          addText=" Hello Html"
        />
        <Button
          index={1}
          activeIndex={activeIndex}
          onClick={handleClick}
          defaultText="CSS"
          addText=" Hello css"
        />
        <Button
          index={2}
          activeIndex={activeIndex}
          onClick={handleClick}
          defaultText="js"
          addText=" hello Js"
        />
      </div>
    </>
  );
}

export default App;
