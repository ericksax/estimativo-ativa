import { Header } from "../../components/header";
import { GlobalStyles } from "../../style/global";
import { GlobalReset } from "../../style/reset";
import { CustomSearch } from "../../components/customSearch";

export function Home() {
  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <CustomSearch isLoading={false} />
    </>
  );
}
