import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import useApi from '../useApi';

const mockAxios = new MockAdapter(axios);

const mockedResponse = {
  users: [
    { id: 1, name: 'firstname lastname' },
    { id: 2, name: 'lastname firstname' },
  ],
};

// mock axios reqeusts with a mockedResponse
mockAxios.onGet().reply(200, { ...mockedResponse });
// restore default behavior after all tests are done
afterAll(() => mockAxios.restore());

const testUrl = 'http://localhost';

it('fetches posts from api', async () => {
  const { result } = renderHook(() => useApi(testUrl));

  expect(result.current.response).toBe(null);
  await act(() => result.current.fetchData());

  expect(result.current.response).toEqual(mockedResponse);
});

it('can reset the userlist', async () => {
  const { result } = renderHook(() => useApi(testUrl));

  expect(result.current.response).toBe(null);
  await act(() => result.current.fetchData());

  expect(result.current.response).toEqual(mockedResponse);

  act(() => result.current.reset());
  expect(result.current.response).toBe(null);
});
