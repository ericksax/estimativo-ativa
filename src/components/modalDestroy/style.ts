import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: white;
    padding: 2rem;
    width: 42rem;

    h2 {
      margin-bottom: 1rem;
      color: var(--color-grey-800);
    }

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      button {
        background-color: var(--color-brand-2);
        padding: 1rem;
        width: 100%;
        color: white;
        font-size: 1.4rem;
        margin-top: 1rem;
        border-radius: 0.5rem;

        &:disabled {
          cursor: not-allowed;
          filter: brightness(0.6);
        }
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    height: 64px;
    gap: 1rem;
    font-size: 1.2rem;

    svg {
      fill: var(--color-brand-3);
    }

    p {
      color: var(--color-grey-500);
    }

    margin-bottom: 1rem;
  }
`;

export const CustomModalContainer = styled.div`
  position: relative;

  > span {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    background-color: var(--color-brand-3);
    width: 100%;
    margin-bottom: 2rem;

    > button {
      color: var(--color-grey-100);
      padding: 1rem;
      cursor: pointer;
    }
  }

  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    padding-bottom: 0.5rem;

    p {
      text-align: center;
      margin-top: 1rem;
      color: var(--color-grey-600);
      font-size: 1.6rem;
    }

    strong {
      margin-top: 1rem;
      text-align: center;
      font-size: 1.6rem;
      color: var(--color-grey-800);
    }
  }

  .flex-between {
    display: flex;
    justify-content: space-around;
    margin: 2rem;
  }
`;
