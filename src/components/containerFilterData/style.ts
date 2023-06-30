import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 170px;
  display: flex;
  background-color: white;
  max-height: 500px;
  border: 1px solid black;
  overflow-y: auto;
  width: 100%;
  max-width: 1200px;
 
  ul {
    padding: 0.5rem;
    width: 100%;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
    width: 100%;

    &:hover {
      background-color: var(--color-brand-1);
      color: white;
    }
  }
`