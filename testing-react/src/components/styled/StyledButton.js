import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid white;
  background: transparent;
  color: white;
  padding: 1em;
  margin: 1em;
  border-radius: 5px;
  min-width: 150px;
  font-size: 0.5em;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    color: #2f2f2f;
  }
`;

export default StyledButton;
