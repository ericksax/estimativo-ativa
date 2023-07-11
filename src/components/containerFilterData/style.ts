import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 17rem;
  display: flex;
  background-color: white;
  max-height: 50rem;
  border: 1px solid var(--color-grey-400);
  overflow-y: auto;
  width: 100%;
  max-width: 94rem;
 
  ul {
    width: 100%;
  }

  li {
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;

    &:hover {
      background-color: var(--color-brand-1);
      color: white;
    }
  }
`