import { Header } from "../../components/header";
import { GlobalStyles } from "../../style/global";
import { GlobalReset } from "../../style/reset";
import { CustomSearch } from "../../components/customSearch";
import { useEffect, useState } from "react"

export function Home() {
  const [ data, setData ] = useState([] as DataType[])
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/medics')
      const data = await res.json()
      setData([...data])
    }
    fetchData()
  }, [])

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <CustomSearch data={data} />
    </>
  )
}