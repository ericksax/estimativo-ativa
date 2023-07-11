import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 1rem;
  width: 100%;

  & + div {
    margin-top: 1rem;
  }

  label {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
 
  input {
    background-color: var(--color-grey-200) ;
    padding: 1rem;
    font-size: 1.2rem;
    border: 1px solid var(--color-grey-400);
  }
`