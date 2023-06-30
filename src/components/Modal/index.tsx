import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormValuesProps, zodModalSchema } from "./zodModalSchema";
import { Input } from "../Input";
import { useEffect } from "react";
import { ErrorMessage, StyledModal } from "./styles";
import { FaInfoCircle } from "react-icons/fa";
import { useModal } from "../../providers/modalContext";

interface FormDataProps {
  name: string;
  contact: string;
  cnpj: string;
  adress: string;
}

export function Modal() {
  const { isOpen, setIsOpen } = useModal()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValuesProps>({
    resolver: zodResolver(zodModalSchema),
  });

  useEffect(() => {
    const hasLocal = localStorage.getItem('@EstimativOrc')
    console.log(hasLocal)
    if (hasLocal) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  },[]);

  function submit(formData: FormDataProps) {
    localStorage.setItem("@EstimativOrc", JSON.stringify(formData));
    setIsOpen(false)
    reset();
  }

  return (
<>
    {isOpen ? <StyledModal>
      <div>
        <h2>Bem vindo ao orçamento estimativo da Ativa Hospitalar.</h2>
        <div className="info">
          <FaInfoCircle size={48} />
          <p>
            É importante preencher corretamente os dados da empresa, pois serão
            impressos no documento de orçamento ao final.
          </p>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input label={"Nome"} type="text" {...register("name")} />
          {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <Input label={"Endereço"} type="text" {...register("adress")} />
          {errors?.adress && (
            <ErrorMessage>{errors.adress.message}</ErrorMessage>
          )}
          <Input label={"CNPJ"} type="text" {...register("cnpj")} />
          {errors?.cnpj && <ErrorMessage>{errors.cnpj.message}</ErrorMessage>}
          <Input label={"Contato"} type="text" {...register("contact")} />
          {errors?.contact && (
            <ErrorMessage>{errors.contact.message}</ErrorMessage>
          )}
          <button disabled={!isValid} type="submit">
            Começar orçamento
          </button>
        </form>
      </div>
    </StyledModal> : null}

    
    </>
  );
}
