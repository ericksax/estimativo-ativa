import styled from "styled-components";

export const FormContainer = styled.div`
  position: sticky;
  top: 8rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid var(--color-grey-300);
  margin: 2rem 0 2rem;
  width: 100%;

  form {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    width: 100%;

    input {
      border: 1px solid var(--color-grey-300);
      font-size: 1.6rem;
      padding: 1.6rem;
    }

    input[type='number'] {
      max-width: 8rem;
    }

    input:nth-child(1) {
      flex-grow: 1;
    }

    button {
      background-color: var(--color-brand-2);
      color: white;
      border-radius: 0.8rem;
      padding: 1rem 1.5rem;
    }
  }
`  