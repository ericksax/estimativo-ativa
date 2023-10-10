import { useModal } from "../../hooks/useModal";
import { Button } from "../../style/buttons";
import { BackDrop, Container } from "./styles";

export const ModalConcent = () => {
  const { accept, setAccept } = useModal();

  return (
    <>
      {accept ? (
        <BackDrop>
          <Container>
            <aside>
              <Button
                width="12rem"
                variant="primary"
                onClick={() => setAccept(false)}
              >
                OK
              </Button>
              <article>
                <p>
                  Ao clicar, você concorda em disponibilizar os dados informados
                  para que possamos aprimorar nosso atendimento e fornecer novas
                  funcionalidades.
                </p>
              </article>
            </aside>
          </Container>
        </BackDrop>
      ) : null}
    </>
  );
};
