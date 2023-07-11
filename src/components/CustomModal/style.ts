import styled from "styled-components";

export const CustomModalContainer = styled.div`
  position: relative;

  > span {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    background-color: var(--color-brand-3);
    width: 100%;
    margin-bottom: 2rem;
    
    > button {
      color: var(--color-grey-100);
      padding: 1rem;
      cursor: pointer;
    }
  }

  header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    padding-bottom: 0.5rem;

    p {
      text-align: center;
      margin-top: 1rem;
      color: var(--color-grey-600);
      font-size: 1.6rem;
    }

    strong {
      margin-top: 1rem;
      text-align: center;
      font-size: 1.6rem;
      color: var(--color-grey-800);
    }
  }

  .flex-between {
    display: flex;
    justify-content: space-around;
    margin: 2rem;
  }
`;
