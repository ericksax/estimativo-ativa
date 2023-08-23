import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormValuesProps, zodModalSchema } from "./zodModalSchema";
import { Input } from "../Input";
import { useEffect } from "react";
import { ErrorMessage, StyledModal } from "./styles";
import { FaInfoCircle } from "react-icons/fa";
import { useModal } from "../../hooks/useModal";
import { CustomImputMask } from "../customInputMask";

interface FormDataProps {
  name: string;
  contact: string;
  cnpj: string;
  adress: string;
}

export function ModalInfo() {
  const { setIsOpen } = useModal();
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
    const formatedCNPJ = formData.cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
    const formatedData = {
      ...formData,
      cnpj: formatedCNPJ,
    };

    localStorage.setItem("@EstimativOrc", JSON.stringify(formatedData));
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
            {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            <Input
              label={"Endereço: (Endereço completo. min 20 caracteres)"}
              type="text"
              {...register("adress")}
            />
            {errors?.adress && (
              <ErrorMessage>{errors.adress.message}</ErrorMessage>
            )}
            <CustomImputMask
              label={"CNPJ: 00.000.000/0000-00"}
              type="text"
              mask={"99.999.999/9999-99"}
              {...register("cnpj")}
            />
            {errors?.cnpj && <ErrorMessage>{errors.cnpj.message}</ErrorMessage>}
            <CustomImputMask
              label={"Telefone: (00) 00000-0000"}
              type="text"
              mask={"(99) 99999-9999"}
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
