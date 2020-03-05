import React from 'react';
import styled from 'styled-components';
import User from './User';
import StyledButton from './styled/StyledButton';
import useApi from '../hooks/useApi';

const UserList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 80%;
  flex-wrap: wrap;
`;

const FetchExample = ({
  url = 'https://jsonplaceholder.typicode.com/users',
}) => {
  const { response, fetchData, reset } = useApi(url);

  function renderButtons() {
    if (!response || response.length === 0) {
      return (
        <StyledButton type="button" onClick={fetchData}>
          fetch users
        </StyledButton>
      );
    }

    return (
      <StyledButton type="button" onClick={reset}>
        reset users
      </StyledButton>
    );
  }

  function renderUserList() {
    if (!response || response.length === 0) return <p>there are no users</p>;
    return (
      <UserList data-testid="userlist">
        {response.map(user => (
          <User key={`user-${user.id}`} user={user} />
        ))}
      </UserList>
    );
  }

  return (
    <React.Fragment>
      {!response && <h3>click here to fetch some users</h3>}
      {renderButtons()}
      {renderUserList()}
    </React.Fragment>
  );
};

export default FetchExample;
