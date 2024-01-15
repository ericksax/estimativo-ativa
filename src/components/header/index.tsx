import { useEffect, useState } from "react";
import logo from "../../assets/logomarca-ativa-hospitalar.png";
import { StyledHeader } from "./style";

export function Header() {
  const [nome, setNome] = useState("");
  const getNome = () => {
    const info = JSON.parse(localStorage.getItem("@EstimativOrc")!);
    const requesterName = info.solicitante_nome;
    setNome(requesterName);
  };

  useEffect(() => {
    getNome();
  }, []);

  return (
    <StyledHeader>
      <div className="wrapper">
        <img
          src={logo}
          alt="Logotipo da Ativa escrito ativa hospitalar na cor branca."
        />
        <span>Olá, {nome}!</span>
      </div>
    </StyledHeader>
  );
}
