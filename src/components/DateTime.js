import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex gap-4 text-sm font-base ">
      <p>{date.toLocaleDateString()}</p>
      <p>{date.toLocaleTimeString("en-GB")}</p>
    </div>
  );
};

export default DateTime;
