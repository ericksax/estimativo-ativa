import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;

  bottom: 0;
  height: 8rem;
  width: 100%;
  background-color: white;
  border-top: 1px solid var(--color-grey-300);

  aside {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 2rem;
    gap: 2rem;
  }

  button {
    margin-right: 1rem;
  }

  strong span {
    color: var(--color-grey-600);
  }

  @media (max-width: 780px) {
    height: auto;
    padding: 1.6rem;
    button {
      padding: 0.8rem;
      font-size: 12px;
      margin-right: 0.5rem;
    }
    strong {
      font-size: 87.5%;
    }
  }

  @media (max-width: 320px) {
    button {
      padding: 0.5rem 1rem;
      margin: 0.1rem;
      font-size: 1rem;
    }
  }
`;
