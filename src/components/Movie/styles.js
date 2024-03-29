import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED};

  border: none;
  border-radius: 1.6rem;

  padding: 3.2rem;

  > footer {
    margin-top: 3.2rem;
    display: flex;
    gap: .8rem;

    .cardTag {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  margin-bottom: 1.6rem;

  > h1 {
    font-weight: 700;
    text-align: left;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .cardRating {
    gap: .5rem
  }

  .cardRating > svg {
    height: 1.8rem;
    width: 1.8rem;
  }
`;


export const Description = styled.p`
  color: ${({ theme }) => theme.COLORS.TEXT_GRAY};
  font-family: 'Roboto', sans-serif;
  text-align: left;

  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical; 
`;