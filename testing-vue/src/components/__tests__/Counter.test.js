import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter.vue";

it("it increments, decrements and resets", async () => {
  const { queryByTestId, queryByLabelText } = render(Counter);

  const increaseBtn = queryByLabelText(/increase.*count/i);
  const decreaseBtn = queryByLabelText(/decrease.*count/i);
  const clearBtn = queryByLabelText(/reset.*count/i);

  await userEvent.click(increaseBtn);
  const currentCount = queryByTestId("count");
  expect(currentCount).toHaveTextContent("1");

  await userEvent.click(increaseBtn);
  expect(currentCount).toHaveTextContent("2");

  await userEvent.click(decreaseBtn);
  expect(currentCount).toHaveTextContent("1");

  await userEvent.click(clearBtn);
  expect(currentCount).toHaveTextContent("0");
});

it("it does not count to negative numbers", async () => {
  const { queryByTestId, queryByLabelText } = render(Counter, {
    props: { initialCount: 1 }
  });
  const currentCount = queryByTestId("count");

  expect(currentCount).toHaveTextContent("1");
  const decreaseBtn = queryByLabelText(/decrease.*count/i);

  await userEvent.click(decreaseBtn);
  expect(currentCount).toHaveTextContent("0");

  await userEvent.click(decreaseBtn);
  expect(currentCount).toHaveTextContent("0");
  expect(currentCount).not.toHaveTextContent("-1");
});
