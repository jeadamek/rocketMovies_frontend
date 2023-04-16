import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: 12rem auto;
  grid-template-areas: 
    "header"
    "content";

  > main {
    grid-area: content;
    padding: 3rem 0 6rem;

    width: 113rem;
    margin: 0 auto;

    .buttons {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 47rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  margin-top: 2.4rem;
  padding-right: 1rem;

  .tags {
    margin: 4rem 0;
    display: flex;
    gap: .8rem;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleRating = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.4rem;
  line-height: 4.8rem;

  > h1 { 
    font-size: 3.6rem;
    font-weight: 500;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  line-height: 1.9rem;

  div {
    display: flex;
    align-items: center;
    gap: .8rem;

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Description = styled.div`
  > p {
    text-align: justify;
    line-height: 2.1rem;
    margin-bottom: 2rem;
  }
`;
