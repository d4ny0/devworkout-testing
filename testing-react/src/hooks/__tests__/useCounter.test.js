import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../useCounter';

it('exposes the count and increment/decrement functions', () => {
  const { result } = renderHook(useCounter);

  expect(result.current.count).toBe(0);

  act(() => result.current.increment());
  expect(result.current.count).toBe(1);

  act(() => result.current.increment());
  expect(result.current.count).toBe(2);

  act(() => result.current.decrement());
  expect(result.current.count).toBe(1);

  act(() => result.current.clear());
  expect(result.current.count).toBe(0);
});

it('allows customization of the initial count', () => {
  const initialValue = 10;
  const { result } = renderHook(() => useCounter(initialValue));

  expect(result.current.count).toBe(initialValue);
});

it('allows customization of the step', () => {
  const initialValue = 0;
  const step = 2;

  const { result } = renderHook(() => useCounter(initialValue, step));

  expect(result.current.count).toBe(initialValue);

  act(() => result.current.increment());
  expect(result.current.count).toBe(2);

  act(() => result.current.decrement());
  expect(result.current.count).toBe(0);
});
