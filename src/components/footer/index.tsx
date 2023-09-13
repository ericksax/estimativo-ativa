import { Link } from "react-router-dom";
import React, { SetStateAction } from "react";
import { useModal } from "../../hooks/useModal";
import { StyledFooter } from "./styles";
import { formatToCurrency } from "../../utils/utils";
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
          <Link to="/pdf_document" target="_blank">
            <button>Imprimir</button>
          </Link>
          <button
            onClick={async () => {
              setSendMail(true);
              const list = localStorage.getItem("@AtivaHospLogList");
              const info = localStorage.getItem("@EstimativOrc");

              const objectBody = {
                list,
                info,
              };

              await fetch("http://address/", {
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(objectBody),
              });
            }}
          >
            Enviar por e-mail
          </button>
        </aside>
        <strong>
          <span>Total </span>
          {formatToCurrency(total)}
        </strong>
      </div>
    </StyledFooter>
  );
};
