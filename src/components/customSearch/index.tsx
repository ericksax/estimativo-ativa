import { useEffect, useRef, useState } from "react";
import { EmptyList, Container } from "./style.js";
import { FaFolderOpen } from "react-icons/fa";
import { CustomTable } from "../customTable/index.js";
import { ContainerFilterData } from "../containerFilterData/index.js";
import { Form } from "../form/index.js";
import { useModal } from "../../providers/modalContext/index.js";
import { Footer } from "../Footer/index.js";
import { CustomModal } from "../CustomModal/index.js";
import { Button } from "../../style/buttons/index.js";
import { CustomModalContainer } from "../CustomModal/style.js";

export function CustomSearch({ data }: DataTypeProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableList, setTableList] = useState([] as ProductProps[]);
  const [product, setProduct] = useState({} as DataType);
  const [inputQuantity, setInputQuantity] = useState(1);
  const [areYouSure, setAreYouSure] = useState(false);
  const { setIsOpen } = useModal();
  const total = tableList.reduce((acc, act) => acc + act["PF Sem Impostos"], 0);

  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutClick: any = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        setAreYouSure(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (e: { key: string }) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

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
    setAreYouSure(false);
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
      <Footer setAreYouSure={setAreYouSure} total={total} />
      <CustomModal areYouSure={areYouSure}>
        <CustomModalContainer ref={modalRef}>
          <span>
            <button onClick={() => setAreYouSure(false)}>X</button>
          </span>

          <header>
            <p>
              Ao confirmar você apagará a lista de itens e todos os dados
              informados anteriormente.
            </p>
            <strong>Você deseja continuar?</strong>
          </header>

          <div className="flex-between">
            <Button variant="warning" width="122px" onClick={cleanSavedList}>
              Sim
            </Button>
            <Button
              variant="primary"
              width="122px"
              ref={buttonRef}
              onClick={() => setAreYouSure(false)}
            >
              não
            </Button>
          </div>
        </CustomModalContainer>
      </CustomModal>
    </Container>
  );
}
