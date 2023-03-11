import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: fit-content;

  padding: .8rem 1.6rem;
  border-radius: .8rem;

  font-family: 'Roboto', serif;
  font-size: 1.2rem;
  line-height: 1.4rem;
`;  