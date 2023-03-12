import styled from "styled-components";

export const Container = styled.div`
  > header {
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.RED};

    display: flex;
    align-items: center;

    padding: 0 14.4rem;
  }
`;

export const Form = styled.form`
  width: 34.4rem;
  margin: 3rem auto 0;
`;