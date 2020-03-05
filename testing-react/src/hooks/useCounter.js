import { useState } from 'react';

const useCounter = (initialCount = 0, step = 1) => {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    if (count - step >= 0) setCount(count - step);
  }

  return {
    count,
    increment,
    decrement,
    clear: () => setCount(initialCount),
  };
};

export default useCounter;
