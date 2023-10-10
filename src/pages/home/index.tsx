import { Header } from "../../components/header";
import { CustomSearch } from "../../components/customSearch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
  const info = localStorage.getItem("@EstimativOrc");
  const navigate = useNavigate();

  useEffect(() => {
    if (!info) {
      navigate("/");
    }
  });

  return (
    <>
      <Header />
      <CustomSearch isLoading={false} />
    </>
  );
}
