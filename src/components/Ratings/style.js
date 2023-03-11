import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    width: 2.4rem;
    height: 2.4rem;
  }
`;