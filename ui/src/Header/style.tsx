import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  border: 1px solid #c7c7c7;
  background: #fff;
  margin: 30px 0 0 0;
  box-shadow: 0 0 5px rgba(199, 199, 199, 0.4);
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tab = styled.div`
  display: block;
  padding: 0 0;
  flex: 1;
  text-align: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;

  a {
    width: 100%;
    display: block;
    padding: 15px 0;
    text-decoration: none;
    color: rgb(85, 85, 85);
  }

  &:first-of-type {
    border-right: 1px solid #c7c7c7;
  }
  &.selected {
    color: #000;
    font-weight: bold;
    border-bottom: 3px #ff7a12 solid;
  }
`;
