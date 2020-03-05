import React from 'react';
import styled from 'styled-components';

const UserCard = styled.li`
  flex: 1 0 25%;
  padding: 1em;
  margin: 1em;
  border: 1px solid #2f2f2f;
  background: #00ddff;
  color: #2f2f2f;
  border-radius: 1em;
`;

const User = ({ user }) => (
  <UserCard>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>
      {`${user.address.city} ${user.address.zipcode}`} <br />
      {`${user.address.street} ${user.address.suite}`}
    </p>
  </UserCard>
);

export default User;
