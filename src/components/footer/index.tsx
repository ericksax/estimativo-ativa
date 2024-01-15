import { Link } from "react-router-dom";
import React, { SetStateAction } from "react";
import { useModal } from "../../hooks/useModal";
import { StyledFooter } from "./styles";
import { formatToCurrency } from "../../utils/utils";
import { Button } from "../../style/buttons";
import { api } from "../../servers/api";
interface FooterProps {
  total: number;
  setAreYouSure: React.Dispatch<SetStateAction<boolean>>;
}

export const Footer = ({ total }: FooterProps) => {
  const { setAreYouSure, setSendMail, setClean } = useModal();
  const formattedTotal = formatToCurrency(total);

  async function sendEstimate() {
    console.log("oi");
    const list = JSON.parse(localStorage.getItem("@AtivaHospLogList")!);
    const info = JSON.parse(localStorage.getItem("@EstimativOrc")!);

    const objectBody = {
      list,
      info,
    };

    const body = JSON.stringify(objectBody);
    try {
      await api
        .post("wms_ativa/apiservice/orcamento/gravaOrcamento.php", body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          localStorage.setItem(
            "@estimativaOrcNumber",
            JSON.stringify(result.data.id)
          );
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledFooter>
      <div className="wrapper">
        <aside>
          <Button variant="primary" onClick={() => setAreYouSure(true)}>
            Novo orçamento
          </Button>
          <Link to="/pdf_document" target="_blank">
            <Button variant="primary" onClick={() => sendEstimate()}>
              Imprimir
            </Button>
          </Link>
          <Button
            variant="primary"
            onClick={async () => {
              setSendMail(true);
              sendEstimate();
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
