import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 72rem;
  padding: 1.6rem;

  .box-content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 3.2rem;
    width: 36rem;
    padding: 2rem;
    color: var(--color-brand-4);

    h1 {
      font-size: 4rem;
    }
  }

  aside {
    flex: 1;
    display: flex;
    background-color: var(--color-brand-1);
    padding: 2.4rem;
    box-shadow: 15px 20px 30px 5px rgb(0, 0, 0, 0.3);

    border-radius: 0.8rem;

    label {
      color: var(--color-grey-800);
    }

    form {
      width: 100%;
      button {
        margin-top: 2rem;
      }

      div {
        background-color: transparent;
        color: var(--color-grey-800);
      }
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.1rem;
  padding: 0.5rem 0;
  color: var(--color-warning);
`;
