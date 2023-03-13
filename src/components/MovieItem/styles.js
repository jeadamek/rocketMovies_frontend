import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

  border:  ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  padding: 1.6rem;
  border-radius: 1rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.2rem;
  }
  
  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;