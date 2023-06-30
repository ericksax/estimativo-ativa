import styled from "styled-components";

export const Container = styled.div`
  overflow-x: auto;
  main {
    padding-bottom: 12rem;
  }
`
export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
  width: 100%;
  height: 400px;
  gap: 4rem;

  svg {
    fill: var(--color-grey-300);
  }
`

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
  }

  button {
    background-color: var(--color-brand-3);
    color: white;
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    margin-right: 1rem;
  }

  strong span {
    color: var(--color-grey-600)
  }
`