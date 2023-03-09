import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  display: flex;
  justify-content: space-between;
  gap: 6.4rem;

  padding: 0 12.5rem;
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

export const Profile = styled.div`
  display: flex;
  align-items: center;
  min-width: 20rem;

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

export const Logout = styled.button`
  border: none;
  background: none;
  text-align: right;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
