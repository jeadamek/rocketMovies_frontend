import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  margin-bottom: .8rem;
  padding: 0 2.4rem;
  border-radius: 1rem;  

  > input {
    height: 5.6rem;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;