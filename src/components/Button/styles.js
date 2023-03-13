import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  border: 0;
  padding: 1.6rem 3.2rem;
  margin-top: 2.4rem;
  border-radius: 1rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  &:disabled {
    opacity: 0.5;
  }

  .primary {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
    
  .secondary {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;