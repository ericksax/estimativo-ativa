import { Button } from "../../style/buttons";
import { Input } from "../Input";
import { StyledModal } from "../modalDestroy/style";
import { ModalSendMailContainer } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { useModal } from "../../hooks/useModal";
import { api } from "../../servers/api";
import { toast } from "react-toastify";
interface ModalSendByMailProps {
  email: string;
}

export const ModalSendByMail = () => {
  const { setSendMail } = useModal();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ModalSendByMailProps>();

  const submit: SubmitHandler<ModalSendByMailProps> = (formData) => {
    const contact = JSON.parse(localStorage.getItem("@EstimativOrc")!);
    const list = JSON.parse(localStorage.getItem("@AtivaHospLogList")!);
    const { email } = formData;

    const bodyRequest = {
      email,
      contact,
      list,
    };

    try {
      api.post("/sendmail", bodyRequest, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Email enviado com sucesso!!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Ops, algo deu errado, tente mais tarde!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
    setSendMail(false);
    reset();
  };

  return (
    <StyledModal>
      <ModalSendMailContainer>
        <button onClick={() => setSendMail(false)}>X</button>
        <strong>Enviar o orçamento para o email desejado</strong>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="email"
            label="Endereço de email:"
            required
            {...register("email")}
          />
          {errors.email ? errors.email.message : null}
          <Button type="submit" variant="primary" width="100%">
            Enviar
          </Button>
        </form>
      </ModalSendMailContainer>
    </StyledModal>
  );
};
