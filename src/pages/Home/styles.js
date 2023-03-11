import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 5rem 2rem 6rem;
    width: 117rem;
    margin: 0 auto;
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.8rem;

  > h1 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;
  }

  > button {
    margin: 0;
    width: 21rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  overflow-y: auto;
`;