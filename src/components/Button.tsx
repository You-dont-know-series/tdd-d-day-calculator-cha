import dayCalculate from "utils/dayCalculate";

interface Props {
  setResult: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

const Button: React.FC<Props> = ({ value, setResult }) => {
  const handleClick = () => {
    setResult(`${dayCalculate(value)} 일 남았어요.`);
  };

  return (
    <button data-testid="button" onClick={handleClick}>
      계산
    </button>
  );
};

export default Button;
