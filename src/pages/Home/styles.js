import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    padding: 5rem 2rem 6rem;
    width: 117rem;
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

  a {
    margin: 0;
    width: 21rem;

    width: fit-content;
    height: 5.6rem;

    padding: 1.6rem 3.2rem;
    border-radius: 1rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > svg {
      height: 2rem;
      width: 2rem;
    }
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
