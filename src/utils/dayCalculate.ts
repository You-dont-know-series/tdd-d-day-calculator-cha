import dayjs from "dayjs";

const dayCalculate = (date: Date | string) => {
  const currentDate = dayjs();

  return Math.ceil(dayjs(date).diff(currentDate, "day", true));
};

export default dayCalculate;
