"use client";
import Countdown from "react-countdown";

const CountDown = () => {
  const endDate = new Date("2023-07-31");
  return (
    <Countdown className="font-bold text-5xl text-red-400" date={endDate} />
  );
};

export default CountDown;
