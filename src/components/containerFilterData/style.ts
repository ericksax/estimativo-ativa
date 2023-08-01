import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 17.8rem;
  display: flex;
  background-color: white;
  max-height: 40rem;
  border: 1px solid var(--color-grey-300);
  overflow-y: auto;
  width: 100%;
  max-width: 94rem;

  ul {
    width: 100%;
  }

  li {
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;

    &:hover {
      background-color: var(--color-brand-1);
      color: white;
    }
  }

  .subInfo {
    font-weight: 900;
    font-style: italic;
    font-size: 10px;
    margin-left: .5rem;
  }
`;
