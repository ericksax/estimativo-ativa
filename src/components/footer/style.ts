import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 8rem;
  width: 100%;
  background-color: white;
  border-top: 1px solid var(--color-grey-300);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 2rem;
  }

  button {
    background-color: var(--color-brand-3);
    color: white;
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    margin-right: 1rem;
  }

  strong span {
    color: var(--color-grey-600);
  }

  @media (max-width: 320px) {
    button {
      padding: 0.5rem 1rem;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
  }
`;
