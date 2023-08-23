import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const StyledTr = styled.tr`
  td {
    text-align: center;
    width: 400px;
  }

  td {
    padding: 0.4rem;
    background-color: var(--color-grey-200);
  }
`;

export const CustomFaTrash = styled(FaTrash)`
  cursor: pointer;
`;
