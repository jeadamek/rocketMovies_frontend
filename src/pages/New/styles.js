import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

`;

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 4rem auto;

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    margin-bottom: 4rem;

    > h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }
  }

  > div {
    display: flex;
    gap: 4rem;
  }
`;