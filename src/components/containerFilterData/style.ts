import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 7.4rem;
  display: flex;
  background-color: white;
  max-height: 32rem;
  border: 1px solid var(--color-grey-300);
  overflow-y: auto;
  width: 100%;
  max-width: 94rem;
  z-index: 2;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;

    &:hover {
      background-color: var(--color-brand-1);
      color: white;
    }
  }

  .price {
    display: flex;
    flex: 1;
    font-weight: bold;
    justify-content: flex-end;
  }
  .subInfo {
    font-weight: 900;
    font-style: italic;
    font-size: 10px;
    margin-left: 0.5rem;
  }
`;
