import { forwardRef, InputHTMLAttributes, ForwardedRef } from "react";
import { StyledInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef(
  ({ label, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInput>
        {label ? <label>{label}</label> : null}
        <input {...rest} ref={ref} />
      </StyledInput>
    );
  }
);
