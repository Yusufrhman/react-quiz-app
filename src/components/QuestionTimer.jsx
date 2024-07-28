import { useEffect, useState } from "react";

function QuestionTimer({ timeOut, onTimeOut, mode }) {
  const [remaningTime, setRemainingTime] = useState(timeOut);
  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
    return <progress id="question-time" max={timeOut} value={remaningTime} className={mode} />;
}

export default QuestionTimer;
