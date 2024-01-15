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
  z-index: 3;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 95.6rem;
    gap: 1rem;
    flex-wrap: wrap;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 400;
    }
  }
`;
