import styled from "styled-components";

export const Container = styled.div`
  main {
    padding-bottom: 8rem;
    display: flex;
    flex-direction: column;
  }

  .table-content {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
  width: 100%;
  min-width: 52.4rem;
  max-width: 93.6rem;
  align-self: center;
  height: 24rem;
  gap: 4rem;

  svg {
    fill: var(--color-grey-300);
  }
`;
