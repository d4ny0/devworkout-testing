import styled from 'styled-components';

const NavItem = styled.li`
  flex: 1;
  text-align: center;
  background-color: ${props => (props.active ? '#00ddff' : '#282c34')};
  &:hover {
    background-color: #00ddff;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 1em 0;
    display: block;
  }
`;

export default NavItem;
