import styled from 'styled-components';
import {
  box,
  mediumTopMargin,
  boxPadding,
  boxRowBorder
} from '../../shared/styles';

export const LeadWrapper = styled.div`
  ${mediumTopMargin}
  ${box}
`;

export const CustomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${boxPadding}
  ${boxRowBorder}
`;
export const CustomerIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  flex: 0 0 60px;
  text-align: right;

  & span {
    display: flex;
    align-items: center;
    align-self: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ff9e42;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
`;

export const CustomerDetails = styled.div`
  color: #000;
  font-size: 15px;

  span {
    color: #555555;
    font-size: 12px;
  }
`;

export const JobDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${boxPadding}
  ${boxRowBorder}
  color:#555555;
  font-size: 15px;

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & ul li {
    display: inline;
    margin-right: 25px;

    & svg {
      margin-right: 10px;
    }
  }
`;

export const CustomerInfoWrapper = styled(JobDetailsWrapper)`
  border-bottom: none;
  padding-bottom: 0;

  & ul li {
    color: #ff9e42;
    font-weight: bold;

    & svg {
      color: #555555;
      margin-right: 3px;
    }
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${boxPadding}
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  ${boxPadding}
  ${boxRowBorder}

  & p {
    font-size: 15px;
    color: #555555;
    line-height: 23px;
    margin: 0;
    padding: 0;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  & span {
    color: #000;
    padding-right: 5px;
  }
`;
