import { Link } from "react-router-dom";
import React, { SetStateAction } from "react";
import { useModal } from "../../hooks/useModal";
import { StyledFooter } from "./styles";
import { formatToCurrency } from "../../utils/utils";
import { Button } from "../../style/buttons";
interface FooterProps {
  total: number;
  setAreYouSure: React.Dispatch<SetStateAction<boolean>>;
}

export const Footer = ({ total }: FooterProps) => {
  const { setAreYouSure, setSendMail, setClean } = useModal();
  const formattedTotal = formatToCurrency(total);

  return (
    <StyledFooter>
      <div className="wrapper">
        <aside>
          <Button variant="primary" onClick={() => setAreYouSure(true)}>
            Excluir
          </Button>
          <Link to="/pdf_document" target="_blank">
            <Button variant="primary">Imprimir</Button>
          </Link>
          <Button
            variant="primary"
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
          </Button>
          <Button variant="primary" onClick={() => setClean(true)}>
            Apagar lista
          </Button>
        </aside>
        <strong>
          <span>Total </span>
          {formattedTotal}
        </strong>
      </div>
    </StyledFooter>
  );
};
