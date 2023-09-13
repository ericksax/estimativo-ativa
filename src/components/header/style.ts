import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-brand-1);
  width: 100%;
  padding: 0.8rem 0;
  height: 80px;
  position: sticky;
  top: 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 98rem;
  }
`;
