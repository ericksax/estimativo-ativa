import { useEffect, useState } from "react";
import { EmptyList, Container } from "./style.js";
import { FaFolderOpen } from "react-icons/fa";
import { CustomTable } from "../customTable/index.js";
import { ContainerFilterData } from "../containerFilterData/index.js";
import { Form } from "../form/index.js";
import { Footer } from "../Footer/index.js";
import { useModal } from "../../hooks/useModal/index.js";
import { BounceLoader } from 'react-spinners';
import { CustomModal } from "../customModal";
interface CustomSearchProps extends DataTypeProps {
  isLoading: boolean
}

export function CustomSearch({ data, isLoading }: CustomSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tableList, setTableList] = useState([] as AtivaProductProps[]);
  const [product, setProduct] = useState({} as AtivaProductProps);
  const [inputQuantity, setInputQuantity] = useState(1);
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

  const override: React.CSSProperties = {
    display: "block",
    margin: "8rem auto",
  }
  
  if(isLoading) {
     return (
       <div style={{
         margin: "0 auto",
         width: "500px",
         textAlign: "center",
         color: "var(--color-grey-800)"
       }}>
       <BounceLoader 
         cssOverride={override}
         color="#3e96a9"
         loading={isLoading}
         size={150}
         aria-label="Loading-Spinner"
       />
       <p>Estamos preparando tudo para você, aguarde...</p>
       </div>
     )
   } 
  
  const filteredData = data.filter((item: AtivaProductProps) => {
    const groupedName = (item.descricao_produto + item.fabricante).toLowerCase();
    const term = searchTerm.toLowerCase();
    
    if (term.length >= 3) {
      return groupedName.includes(term);
    }
  });
  

  function addItemToTable(item: AtivaProductProps) {
    const formattedTerm =
      item.descricao_produto + " - " + item.fabricante;
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
    
    const formattedPrice =
      parseFloat(product.valor.split(",").join("")) / 100;

    if (hasOnTableList) {
      const price = formattedPrice;
      hasOnTableList.quantity = hasOnTableList.quantity + inputQuantity;
      hasOnTableList.valor = (hasOnTableList.quantity * price).toString();

      return setTableList((state) => [...state]);
    }

    if (Object.keys(product).length != 0) {
      const formattedPriceQuantity = formattedPrice * inputQuantity;

      const insertedProduct = {
        ...product,
        valor: String(formattedPriceQuantity),
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
        {filteredData.length > 0 && searchTerm != product.descricao_produto && (
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
      <CustomModal setTableList={setTableList}/>
    </Container>
  );
}
