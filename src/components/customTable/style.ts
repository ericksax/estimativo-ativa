import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  min-width: 60rem;
  font-size: 11px;
  border-collapse: separate;

  tr {
    height: 6rem;
  }

  thead tr {
    height: 4rem;
  }

  th {
    padding: 1rem;
    background-color: var(--color-grey-300);
  }
`;
