import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  padding: 1.6rem;
  height: 100vh;
  width: 100%;

  .box-content {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 72rem;
    flex-wrap: wrap;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 3.2rem;
    margin: 0 auto;
    width: clamp(36rem, 30vw, 36rem);
    padding: 2rem;
    color: var(--color-brand-4);
    font-size: min(1.6rem, 4vw);
    h1 {
      font-size: min(4rem, 8vw);
    }
  }

  aside {
    display: flex;
    background-color: var(--color-brand-1);
    padding: 2.4rem;
    box-shadow: 15px 20px 30px 5px rgb(0, 0, 0, 0.3);
    margin: 0 auto;
    width: clamp(36rem, 36rem, 80%);
    border-radius: 0.8rem;

    label {
      color: var(--color-grey-800);
      font-size: min(1.2rem, 4vw);
    }

    form {
      width: 100%;
      button {
        margin-top: 2rem;
        font-size: min(1.2rem, 3.8vw);
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
