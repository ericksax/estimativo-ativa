import { ReactNode } from "react";
import { StyledModal } from "../Modal/styles";

interface CustomModalProps {
  children: ReactNode;
  areYouSure: boolean;
}

export const CustomModal = ({ children, areYouSure}: CustomModalProps) => {

  return <> {areYouSure ? <StyledModal>{children}</StyledModal> : null} </>;
};

