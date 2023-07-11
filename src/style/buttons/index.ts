import styled, { css } from "styled-components";

interface ButtonProps {
  width?: string;
  variant: "primary" | "warning";
}

export const Button = styled.button<ButtonProps>`
  ${({ width }: ButtonProps) => {
    return css`
      width: ${width};
    `;
  }};

  padding: 1rem 2rem;
  border-radius: 0.8rem;
  background-color: ${({ variant }: ButtonProps) =>
    variant === "primary" ? "var(--color-brand-2)" : "var(--color-warning)"};
  color: white;
  transition-delay: 0.08s;

  &:hover {
    filter: brightness(0.8);
  }
`;
