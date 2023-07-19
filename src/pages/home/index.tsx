import { Header } from "../../components/header";
import { GlobalStyles } from "../../style/global";
import { GlobalReset } from "../../style/reset";
import { CustomSearch } from "../../components/customSearch";
import { useEffect, useState } from "react";

export function Home() {
  const [ data, setData ] = useState([] as DataType[])
  const [ isLoading, setIsLoading ] = useState(true)
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('http://localhost:3000/medics')
  //     const data = await res.json()
  //     setData([...data])
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp= await fetch('https://ativa.nivel3ti.com.br:44472/wms_ativa/apiservice/orcamento/listaProdutosOrcamento.php', {
          method: "GET"
        })
        const data = await resp.json()
        console.log(data)
        setData(data)
        
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <CustomSearch isLoading={isLoading} data={data} />
    </>
  )
}