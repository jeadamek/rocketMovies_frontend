import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    padding: 4rem 0;
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 113.7rem;
  height: 50rem;
  overflow-y: auto;
  
  margin: 0 auto;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  > header {  
    > h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;

      margin-top: 2.4rem;
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

  .tags {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    
    padding: 1.6rem;
    border-radius: .8rem;
  }
`;