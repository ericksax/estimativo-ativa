import { SetStateAction, useEffect, useRef } from "react";
import { Button } from "../../style/buttons";
import { CustomModalContainer, StyledModal } from "./style";
import { useModal } from "../../hooks/useModal";
interface ModalDestroyProps {
  setTableList: React.Dispatch<SetStateAction<AtivaProductProps[]>>;
}

export const ModalCleanList = ({ setTableList }: ModalDestroyProps) => {
  const { setClean } = useModal();

  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutClick = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        setClean(false);
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

  function cleanSavedList() {
    setClean(false);
    setTableList([]);
    localStorage.removeItem("@AtivaHospLogList");
  }

  return (
    <StyledModal>
      <CustomModalContainer ref={modalRef}>
        <span>
          <button onClick={() => setClean(false)}>X</button>
        </span>

        <header>
          <p>Ao confirmar você apagará a todos os itens da lista.</p>
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
            onClick={() => setClean(false)}
          >
            Não
          </Button>
        </div>
      </CustomModalContainer>
    </StyledModal>
  );
};
