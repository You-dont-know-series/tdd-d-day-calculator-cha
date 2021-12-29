import Button from "components/Button";
import Input from "components/Input";
import { NextPage } from "next";
import { useState } from "react";

const IndexPage: NextPage = () => {
  const [date, setDate] = useState("2022-01-01");
  const [result, setResult] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <>
      <Input value={date} onChange={handleInputChange} />
      <Button value={date} setResult={setResult} />
      <span>{result}</span>
    </>
  );
};

export default IndexPage;
