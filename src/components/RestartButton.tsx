import { useRef } from "react";
import { VscRefresh } from "react-icons/vsc";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      onClick={handleClick}
      className={`block px-8 py-2 hover:bg-slate-700/50 ${className}`}
    >
      <VscRefresh className="w-6 h-6" />
    </button>
  );
};

export default RestartButton;
