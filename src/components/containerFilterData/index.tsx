// import { useEffect, useRef, useState } from "react";
import { Container } from "./style";

export function ContainerFilterData({
  filteredData,
  searchTerm,
  addItemToTable,
}: ContainerFilterDataProps) {
  // const containerRef = useRef<HTMLDivElement>(null);

  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   function handleClick(e: any) {
  //     if (!containerRef.current?.contains(e.target)) {
  //       setIsVisible(false);
  //     }
  //   }
  //   window.addEventListener("click", handleClick);

  //   return window.removeEventListener("mousedown", handleClick);
  // }, []);

  // useEffect(() => {
  //   const handleKeydown = (e: { key: string }) => {
  //     if (e.key === "Escape") {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeydown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeydown);
  //   };
  // }, []);

  return (
    /* <>
      {isVisible ? ( */
    <>
      {filteredData.length > 0 ? (
        <Container /*ref={containerRef}*/>
          <ul>
            {filteredData.map(
              (item: AtivaProductProps) =>
                searchTerm &&
                searchTerm != item.descricao_produto && (
                  <li
                    key={item.id_produto}
                    onClick={() => addItemToTable(item)}
                  >
                    {item.descricao_produto}
                    <span className="subInfo">
                      {item.embalagem + " - " + item.fabricante}
                    </span>
                  </li>
                )
            )}
          </ul>
        </Container>
      ) : null}
    </>
    /*
      ) : null}
    </> */
  );
}
