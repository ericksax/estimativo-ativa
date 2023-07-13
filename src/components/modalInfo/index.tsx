import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormValuesProps, zodModalSchema } from "./zodModalSchema";
import { Input } from "../Input";
import { useEffect } from "react";
import { ErrorMessage, StyledModal } from "./styles";
import { FaInfoCircle } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";

interface FormDataProps {
  name: string
  contact: string
  cnpj: string
  adress: string
}

export function ModalInfo() {
 const {setIsOpen} = useModal()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValuesProps>({
    resolver: zodResolver(zodModalSchema),
  });

  useEffect(() => {
    const hasItem =
      JSON.parse(localStorage.getItem("@AtivaHospLogList")!).length > 0;

    const hasLocal = localStorage.getItem("@EstimativOrc") || hasItem;

    if (hasLocal) {
      setIsOpen(false);
      document.body.classList.add("no-scroll");
    } else {
      setIsOpen(true);
    }

    // return () => document.body.classList.remove(".no-scroll");
  }, []);

  function submit(formData: FormDataProps) {
    localStorage.setItem("@EstimativOrc", JSON.stringify(formData));
    setIsOpen(false);
    reset();
  }

  return (
    <>
      <StyledModal>
        <div>
          <h2>Bem vindo ao orçamento estimativo da Ativa Hospitalar.</h2>
          <div className="info">
            <FaInfoCircle size={48} />
            <p>
              É importante preencher corretamente os dados da empresa, pois
              serão impressos no documento de orçamento ao final.
            </p>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              label={"Nome: (min 3 caracteres)"}
              type="text"
              {...register("name")}
            />
            {errors?.name && (
              <ErrorMessage>{errors.name.message}</ErrorMessage>
            )}
            <Input
              label={"Endereço: (Endereço completo. min 20 caractertes)"}
              type="text"
              {...register("adress")}
            />
            {errors?.adress && (
              <ErrorMessage>{errors.adress.message}</ErrorMessage>
            )}
            <Input
              label={"CNPJ: 00.000.000/0000-23"}
              type="text"
              {...register("cnpj")}
            />
            {errors?.cnpj && (
              <ErrorMessage>{errors.cnpj.message}</ErrorMessage>
            )}
            <Input
              label={"Telefone: (000)00000-0000"}
              type="text"
              {...register("contact")}
            />
            {errors?.contact && (
              <ErrorMessage>{errors.contact.message}</ErrorMessage>
            )}
            <button disabled={!isValid} type="submit">
              Começar orçamento
            </button>
          </form>
        </div>
      </StyledModal>
    </>
  );
}
