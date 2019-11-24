import styled from 'styled-components';
import { box, largeTopMargin } from '../shared/styles';
export const HeaderWrapper = styled.div`
  ${largeTopMargin}
  ${box}
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
    border-right: 1px solid #ededed;
  }
  &.selected {
    color: #000;
    font-weight: bold;
    border-bottom: 3px #ff7a12 solid;
  }
`;
