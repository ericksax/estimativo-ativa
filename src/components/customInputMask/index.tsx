import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import InputMask, { ReactInputMask } from "react-input-mask";
import { StyledInput } from "../Input/style";

interface CustomInputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  mask: string
}

export const CustomImputMask = forwardRef(
  (
    { label, type, mask, ...rest }: CustomInputMaskProps,
    ref: ForwardedRef<ReactInputMask>
  ) => {
    return (
      <StyledInput>
        {label ? <label>{label}</label>: null}
        <InputMask
          mask={mask}
          {...rest}
          ref={ref}
        />
      </StyledInput>
    );
  }
);
