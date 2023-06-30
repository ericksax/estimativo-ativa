import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: white;
    padding: 4rem;
    width: 64rem;

    h2 {
      margin-bottom: 4rem;
    }

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      button {
        background-color: var(--color-brand-2);
        padding: 2rem;
        width: 100%;
        color: white;
        font-size: 1.6rem;
        margin-top: 2rem;
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
    gap: 2rem;

    svg {
      fill: var(--color-brand-3);
    }

    p {
      color: var(--color-grey-500);
    }
    margin-bottom: 1rem;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--color-warning);
`;
