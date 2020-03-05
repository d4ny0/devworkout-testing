import React from 'react';
import useCounter from '../hooks/useCounter';
import StyledButton from './styled/StyledButton';

const Counter = ({ initialCount = 0 }) => {
  const { count, increment, decrement, clear } = useCounter(initialCount);

  return (
    <React.Fragment>
      <h3>Count up and down, but never below zero</h3>
      <p data-testid="count">{count}</p>
      <div>
        <StyledButton
          type="button"
          aria-label="increase count"
          onClick={increment}
        >
          +1
        </StyledButton>
        <StyledButton
          type="button"
          aria-label="decrease count"
          onClick={decrement}
        >
          -1
        </StyledButton>
      </div>
      <StyledButton type="button" aria-label="reset count" onClick={clear}>
        reset
      </StyledButton>
    </React.Fragment>
  );
};

export default Counter;
