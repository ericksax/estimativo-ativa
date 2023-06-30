import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  gap: 1rem;
  width: 100%;

  & + div {
    margin-top: 2rem;
  }

  label {
    color: var(--color-grey-500);
  }
 
  input {
    background-color: var(--color-grey-200) ;
    padding: 2rem;
    font-size: 1.6rem;
    border: 1px solid var(--color-grey-400);
  }
`