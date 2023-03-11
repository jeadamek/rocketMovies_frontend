import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  
  display: flex;
  align-items: center;
  gap: 1rem;
  
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;