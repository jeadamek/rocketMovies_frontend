import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  max-width: 100%;

  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > div {
    width: 113rem;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  } 
`;  

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  min-width: fit-content;

  > img {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    margin-right: 1rem;
    text-align: right;
    line-height: 1.8rem;

    > strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled(Link)`
  border: none;
  background: none;
  text-align: right;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
