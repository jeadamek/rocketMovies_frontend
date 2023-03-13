import styled from "styled-components";
import backgroundImg from '../../assets/background.png';


export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  padding: 0 16.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;

    margin: 4.8rem 0;
  }

  > p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  > a {
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-top: 4.2rem;
    align-self: center;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
