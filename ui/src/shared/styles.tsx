import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export const box = css`
  box-shadow: 0 0 5px rgba(199, 199, 199, 0.4);
  border: 1px solid #c7c7c7;
  background: #fff;
  box-sizing: border-box;
`;

export const boxPadding = css`
  padding: 15px;
  box-sizing: border-box;
`;

export const boxRowBorder = css`
  border-bottom: 1px solid #ededed;
`;

export const largeTopMargin = css`
  margin-top: 30px;
`;

export const mediumTopMargin = css`
  margin-top: 15px;
`;

export const Button = styled.button`
  width: 120px;
  text-align: center;
  padding: 13px 0;
  font-size: 14px;
  background: #eeeeee;
  border: none;
  margin-right: 10px;
  border-radius: 2px;
  font-weight: bold;
  box-shadow: inset 0px -3px 0px 0px rgba(0, 0, 0, 0.3);
`;

export const ActionButton = styled(Button)`
  background: #ff7a12;
  color: #fff;
`;
