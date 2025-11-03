import viteLogo from "../../../public/vite.svg";
import "./header.css"

interface HeaderProps {
  timer: string;
}

export function Headers({timer}:HeaderProps) {
  return (
     <header className="header">
      <img className="logo" src={viteLogo} alt="Vite logo" />
      <div className="timer">{timer}</div>
    </header>
  );
}
