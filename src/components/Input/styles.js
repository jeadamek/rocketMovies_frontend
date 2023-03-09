import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;

  align-self: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};


  margin-bottom: .8rem;
  border-radius: 1rem;  

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;


    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }


    > svg {
      margin-left: 16px;
    }
  }
`;