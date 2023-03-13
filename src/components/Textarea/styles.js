import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  min-height: 27.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  border: none;
  resize: none;
  
  padding: 1.6rem; 
  border-radius: 1rem;
`;