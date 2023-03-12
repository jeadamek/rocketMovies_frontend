import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  main {
    padding-bottom: 5rem;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 113.7rem;
  /* height: 50rem; */
  /* overflow-y: auto; */
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  > header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }
  }

  > div {
    display: flex;
    gap: 4rem;
    
    div {
      margin: 0;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
  }

  > div {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    
    padding: 1.6rem;

    display: flex;
    gap: 2.4rem;
  }
`;