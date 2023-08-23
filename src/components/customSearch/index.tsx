import { useEffect, useState } from "react";
import { EmptyList, Container } from "./style.js";
import { FaFolderOpen } from "react-icons/fa";
import { CustomTable } from "../customTable/index.js";
import { ContainerFilterData } from "../containerFilterData/index.js";
import { Form } from "../form/index.js";
import { Footer } from "../footer/index.js";
import { useModal } from "../../hooks/useModal/index.js";
import { ModalCustom } from "../modalCustom/index.js";
import { CustomSpinner } from "../customSpinner/index.js";

interface CustomSearchProps {
  isLoading: boolean;
}

export function CustomSearch({ isLoading }: CustomSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableList, setTableList] = useState([] as AtivaProductProps[]);
  const [product, setProduct] = useState({} as AtivaProductProps);
  const [inputQuantity, setInputQuantity] = useState(1);
  const [filteredData, setFilteredData] = useState([] as AtivaProductProps[]);
  const { setAreYouSure } = useModal();
  const total = tableList.reduce((acc, act) => acc + Number(act.valor), 0);

  useEffect(() => {
    const dataFromStorage = localStorage.getItem("@AtivaHospLogList");

    if (dataFromStorage != null) {
      const listFromStorage = JSON.parse(dataFromStorage);

      if (listFromStorage.length > 0) {
        setTableList([...listFromStorage]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@AtivaHospLogList", JSON.stringify(tableList));
  }, [tableList]);

  if (isLoading) {
    return <CustomSpinner isLoading={isLoading} />;
  }

  function addItemToTable(item: AtivaProductProps) {
    const formattedTerm = item.descricao_produto; /*+ " - " + item.fabricante;*/
    setSearchTerm(formattedTerm);
    setProduct(item);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setSearchTerm("");
    setInputQuantity(1);

    const hasOnTableList = tableList.find(
      (item) => item.id_produto == product.id_produto
    );

    const formattedPrice = product.valor / 100;
    if (hasOnTableList) {
      const price = formattedPrice;
      hasOnTableList.quantity = hasOnTableList.quantity + inputQuantity;
      hasOnTableList.valor = hasOnTableList.quantity * price;
      return setTableList((state) => [...state]);
    }

    if (Object.keys(product).length != 0) {
      const formattedPriceQuantity = formattedPrice * inputQuantity;

      const insertedProduct = {
        ...product,
        valor: formattedPriceQuantity,
        quantity: inputQuantity,
      };
      setTableList((state) => [...state, insertedProduct]);
    }
    setProduct({} as AtivaProductProps);
  }

  return (
    <Container>
      <main className="wrapper">
        <Form
          handleSubmit={handleSubmit}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setInputQuantity={setInputQuantity}
          inputQuantity={inputQuantity}
          setFilteredData={setFilteredData}
        />
        {filteredData.length > 0 && searchTerm != product.descricao_produto ? (
          <ContainerFilterData
            filteredData={filteredData}
            searchTerm={searchTerm}
            addItemToTable={addItemToTable}
          />
        ) : null}
        <CustomTable setTableList={setTableList} tableList={tableList} />
        {tableList.length == 0 ? (
          <EmptyList>
            <FaFolderOpen size={64} />
            <p>Lista vazia...</p>
          </EmptyList>
        ) : null}
      </main>
      <Footer setAreYouSure={setAreYouSure} total={total} />
      <ModalCustom setTableList={setTableList} />
    </Container>
  );
}
