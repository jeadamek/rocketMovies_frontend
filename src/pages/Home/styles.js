import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 5rem 2rem 6rem; // <<<<<<<<< ver isso
    width: 117rem; // <<<<<<<<< ver isso
    margin: 0 auto;

    overflow: hidden;
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
  height: 40rem;
  padding-right: 1rem;
  margin-bottom: 5.8rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  overflow-y: auto;
  
`;