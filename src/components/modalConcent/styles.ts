import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  padding: clamp(1rem, 40vh, 2rem);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-grey-100);

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.5rem;

    p {
      font-size: 1.2rem;
    }

    article {
      max-width: max(40vh, 60%);
    }
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 100vw;
`;
