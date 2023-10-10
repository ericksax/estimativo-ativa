import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid var(--color-grey-300);
  margin: 2rem 0 2rem;
  width: 100%;
  border-radius: 0.4rem;

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
    width: 100%;

    div:nth-child(1) {
      flex: 1;
    }

    div {
      all: unset;
      gap: 0.5rem;
      display: flex;
      flex-direction: column;

      label {
        font-size: 1rem;
        color: var(--color-grey-800);
      }
    }

    input {
      all: unset;
      border: 1px solid var(--color-grey-300);
      font-size: 1.2rem;
      padding: 1rem;
      border-radius: 0.4rem;
    }

    .price {
      max-width: 8rem;
    }

    button {
      align-self: self-end;
    }
  }
`;
