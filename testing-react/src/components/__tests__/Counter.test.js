import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

it('it increments, decrements and resets', async () => {
  const { queryByTestId, queryByLabelText } = render(
    <Counter initialCount={0} />
  );
  const currentCount = queryByTestId('count');

  const increaseBtn = queryByLabelText(/increase.*count/i);
  const decreaseBtn = queryByLabelText(/decrease.*count/i);
  const clearBtn = queryByLabelText(/reset.*count/i);

  userEvent.click(increaseBtn);
  expect(currentCount).toHaveTextContent('1');

  userEvent.click(increaseBtn);
  expect(currentCount).toHaveTextContent('2');

  userEvent.click(decreaseBtn);
  expect(currentCount).toHaveTextContent('1');

  userEvent.click(clearBtn);
  expect(currentCount).toHaveTextContent('0');
});

it('it does not count to negative numbers', async () => {
  const { queryByTestId, queryByLabelText } = render(
    <Counter initialCount={1} />
  );
  const currentCount = queryByTestId('count');
  expect(currentCount).toHaveTextContent('1');
  const decreaseBtn = queryByLabelText(/decrease.*count/i);

  await userEvent.click(decreaseBtn);
  expect(currentCount).toHaveTextContent('0');

  await userEvent.click(decreaseBtn);
  expect(currentCount).toHaveTextContent('0');
  expect(currentCount).not.toHaveTextContent('-1');
});
