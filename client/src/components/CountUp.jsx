import { useEffect, useState } from "react";

const CountUp = ({ value, duration = 1600, suffix = "", className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
