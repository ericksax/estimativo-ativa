import { Link } from "react-router-dom";
import { formatToCurrency } from "../../utils/utils";
import { StyledFooter } from "./style";
import { SetStateAction } from "react";

interface FooterProps {
  total: number;
  setAreYouSure: React.Dispatch<SetStateAction<boolean>>;
}

export const Footer = ({ total, setAreYouSure}: FooterProps) => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <aside>
          <button onClick={() => setAreYouSure(true)}>Excluir</button>
            <Link to="/pdf_document">
              <button>Imprimir</button>
            </Link>
        </aside>
        <strong>
          <span>Total </span>
          {formatToCurrency(total)}
        </strong>
      </div>
    </StyledFooter>
  );
};
