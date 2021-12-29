interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<Props> = (props) => {
  return <input data-testid="input" type="date" {...props} />;
};

export default Input;
