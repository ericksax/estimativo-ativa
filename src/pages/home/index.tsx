import { Header } from "../../components/header";
import { GlobalStyles } from "../../style/global";
import { GlobalReset } from "../../style/reset";
import { CustomSearch } from "../../components/customSearch";
// import { useQuery } from "react-query";

export function Home() {
  // const getProducts = async () => { 
  //   console.log(import.meta.env.VITE_DATABASE_URL)
  //   const response =  await fetch(`${import.meta.env.VITE_DATABASE_URL}`)
  //   const data = await response.json()
  //   return data
  // }
  
  // const { data, isLoading } = useQuery('products', getProducts, {
  //   staleTime: 1000 * 60 * 60,
  // })
 // isLoading={isLoading} data={data} 

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <CustomSearch isLoading={false}/>
    </>
  );
}
