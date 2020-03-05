import React from 'react';
import {
  render,
  waitForElement,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import FetchExample from '../FetchExample';

const mockAxios = new MockAdapter(axios);

const mockedResponse = [
  {
    id: 1,
    name: 'firstname lastname',
    email: 'user1@user.at',
    address: {
      city: 'Vienna',
      zipcode: '1030',
      street: 'Neubagasse',
      suite: '1',
    },
  },
  {
    id: 2,
    name: 'lastname firstname',
    email: 'user2@user.at',
    address: {
      city: 'Vienna',
      zipcode: '1030',
      street: 'Neubagasse',
      suite: '1',
    },
  },
];

// mock axios reqeusts with a mockedResponse
mockAxios.onGet().reply(200, [...mockedResponse]);
// restore default behavior after all tests are done
afterAll(() => mockAxios.restore());

const testUrl = 'http://localhost';

it('can fetch users and reset them', async () => {
  const { queryByTestId, queryByText, getByText } = render(
    <FetchExample url={testUrl} />
  );

  // no users loaded - button is aivable
  userEvent.click(queryByText(/fetch.*users/i, { selector: 'button' }));

  // wait for state update to check that the list is rendered
  await waitForElement(() => queryByTestId('userlist'));
  const userList = queryByTestId('userlist');

  expect(userList).toBeInTheDocument();
  expect(getByText(mockedResponse[0].name)).toBeInTheDocument();

  userEvent.click(queryByText(/reset.*users/i, { selector: 'button' }));

  waitForElementToBeRemoved(() => userList);
});
