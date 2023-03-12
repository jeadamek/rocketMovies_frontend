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
  margin: 0 auto ;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;

  height: 18.6rem;
  width: 18.6rem;
  margin: -9.3rem auto 6.4rem;
  
  > img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
  } 

  > label {
    width: 4.8rem;
    height: 4.8rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 1rem;
    bottom: .5rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    
    cursor: pointer;
    
    > input {
      display: none;
    }
    
    > svg {
      width: 2rem;
      height: 2rem;
      
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;