// components/Snowfall.tsx
import React from 'react';

const Snowfall: React.FC = () => {
  const numberOfSnowflakes = 50; // Adjust the number of snowflakes

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const snowflakes = Array.from({ length: numberOfSnowflakes }, (_, index) => {
    const style: React.CSSProperties = {
      left: `${getRandomInt(0, 100)}%`,
      animationDuration: `${getRandomInt(4, 8)}s`, // Reduce animation duration
      animationDelay: `-${getRandomInt(2, 8)}s`, // Randomize animation delay
    };

    return (
      <div key={index} className="snowflake animate-snowfall" style={style}>
        ❄️
      </div>
    );
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {snowflakes}
    </div>
  );
};

export default Snowfall;
