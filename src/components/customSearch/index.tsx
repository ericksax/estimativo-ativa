import { useEffect, useState } from "react";
import { EmptyList, StyledFooter, Container } from "./style.js";
import { FaFolderOpen } from "react-icons/fa";
import { CustomTable } from "../customTable/index.js";
import { ContainerFilterData } from "../containerFilterData/index.js";
import { formatToCurrency } from "../../utils/utils.js";
import { Form } from "../form/index.js";
import { Link } from "react-router-dom";
import { useModal } from "../../providers/modalContext/index.js";

export function CustomSearch({ data }: DataTypeProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableList, setTableList] = useState([] as ProductProps[]);
  const [product, setProduct] = useState({} as DataType);
  const [inputQuantity, setInputQuantity] = useState(1);

  const { setIsOpen } = useModal();

  const total = tableList.reduce((acc, act) => acc + act["PF Sem Impostos"], 0);

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

  const filteredData = data.filter((item: DataType) => {
    const groupedName = (item.PRODUTO + item.LABORATÓRIO).toLowerCase();
    const term = searchTerm.toLowerCase();

    if (term.length >= 3) {
      return groupedName.includes(term);
    }
  });

  function cleanSavedList() {
    setIsOpen(true);
    setTableList([]);
    localStorage.removeItem("@EstimativOrc");
  }

  function addItemToTable(item: DataType) {
    const formattedTerm =
      item.PRODUTO + " - " + item.APRESENTAÇÃO + " - " + item.LABORATÓRIO;
    setSearchTerm(formattedTerm);
    setProduct(item);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setSearchTerm("");
    setInputQuantity(1);

    const hasOnTableList = tableList.find(
      (item) => item["EAN 1"] == product["EAN 1"]
    );
    const formattedPrice =
      parseFloat(product["PF Sem Impostos"].split(",").join("")) / 100;

    if (hasOnTableList) {
      const price = formattedPrice;
      hasOnTableList.quantity = hasOnTableList.quantity + inputQuantity;
      hasOnTableList["PF Sem Impostos"] = hasOnTableList.quantity * price;

      return setTableList((state) => [...state]);
    }

    if (Object.keys(product).length != 0) {
      const formattedPriceQuantity = formattedPrice * inputQuantity;

      const insertedProduct = {
        ...product,
        "PF Sem Impostos": formattedPriceQuantity,
        quantity: inputQuantity,
      };
      setTableList((state) => [...state, insertedProduct]);
    }
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
        />
        {filteredData.length > 0 && searchTerm != product.PRODUTO && (
          <ContainerFilterData
            filteredData={filteredData}
            searchTerm={searchTerm}
            addItemToTable={addItemToTable}
          />
        )}
        <CustomTable setTableList={setTableList} tableList={tableList} />
        {tableList.length == 0 ? (
          <EmptyList>
            <FaFolderOpen size={64} />
            <p>Lista vazia...</p>
          </EmptyList>
        ) : null}
      </main>
      <StyledFooter>
        <div className="wrapper">
          <aside>
            <button onClick={cleanSavedList}>Excluir</button>
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
    </Container>
  );
}
