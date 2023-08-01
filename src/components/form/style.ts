import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid var(--color-grey-300);
  margin: 2rem 0 2rem;
  width: 100%;
  min-width: 52.4rem;

  form {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    width: 100%;
    min-width: 52.4rem;
  
    input {
      border: 1px solid var(--color-grey-300);
      font-size: 1.2rem;
      padding: 1rem;
      width: 100%;
    }

    input[type='number'] {
      max-width: 8rem;
    }

    button {
      background-color: var(--color-brand-2);
      color: white;
      border-radius: 0.8rem;
      padding: 1rem 1.5rem;
    }
  }
`  