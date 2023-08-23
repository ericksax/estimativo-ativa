import { Link } from "react-router-dom";
import React, { SetStateAction } from "react";
import { useModal } from "../../hooks/useModal";
import { formatToCurrency } from "../../utils/utils";
import { StyledFooter } from "./styles";
interface FooterProps {
  total: number;
  setAreYouSure: React.Dispatch<SetStateAction<boolean>>;
}

export const Footer = ({ total }: FooterProps) => {
  const { setAreYouSure, setSendMail } = useModal();
  return (
    <StyledFooter>
      <div className="wrapper">
        <aside>
          <button onClick={() => setAreYouSure(true)}>Excluir</button>
          <Link to="/pdf_document">
            <button>Imprimir</button>
          </Link>
          <button onClick={() => setSendMail(true)}>Enviar por e-mail</button>
        </aside>
        <strong>
          <span>Total </span>
          {formatToCurrency(total)}
        </strong>
      </div>
    </StyledFooter>
  );
};
