import { CustomImputMask } from "../../components/customInputMask";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, ErrorMessage } from "./styles";
import { Button } from "../../style/buttons";
import { insertCNPJMask } from "../../utils/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModalConcent } from "../../components/modalConcent";
import { zodInfoSchema, FormValuesProps } from "./ZodInfoSchema";

interface FormDataProps {
  orgao_nome: string;
  telefone: string;
  cnpj: string;
  solicitante_nome: string;
  email: string;
}

export const FormInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const info = localStorage.getItem("@EstimativOrc");
    if (info) {
      navigate("/home");
    }
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValuesProps>({
    resolver: zodResolver(zodInfoSchema),
  });

  const formatPhoneNumber = (value: any) => {
    const numbersOnly = value.replace(/\D/g, "");
    let formattedValue = "";

    if (numbersOnly.length > 0) {
      formattedValue = "(" + numbersOnly.substring(0, 2);
      if (numbersOnly.length > 2) {
        formattedValue += ") " + numbersOnly.substring(2, numbersOnly.length);
        if (numbersOnly.length > 6 && numbersOnly.length <= 10) {
          formattedValue = formattedValue.replace(/(\d{4})(\d{4})/, "$1-$2");
        } else if (numbersOnly.length > 6) {
          formattedValue = formattedValue.replace(/(\d{5})(\d{4})/, "$1-$2");
        }
      }
    }

    return formattedValue;
  };

  const handlePhoneNumberChange = (e: any) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setValue("telefone", formattedValue);
  };

  function submit(formData: FormDataProps) {
    const formatedCNPJ = insertCNPJMask(formData.cnpj);

    const formatedData = {
      ...formData,
      cnpj: formatedCNPJ,
      aceite: true,
    };

    localStorage.setItem("@EstimativOrc", JSON.stringify(formatedData));
    reset({
      cnpj: "",
      orgao_nome: "",
      solicitante_nome: "",
      email: "",
      telefone: "",
    });
  }

  return (
    <>
      <Container>
        <div className="box-content">
          <section className="info">
            <h1>Olá, Seja bem vindo!</h1>
            <p>
              Este é o Ativa Orçamentos Estimativos. Preencha os campos ao lado
              para ter acesso ao sistema de orçamento.{" "}
            </p>
          </section>
          <aside>
            <form onSubmit={handleSubmit(submit)}>
              <Input
                label={"Nome da instituição ou órgão público:"}
                type="text"
                {...register("orgao_nome")}
              />
              <ErrorMessage>
                {errors.orgao_nome ? errors.orgao_nome.message : null}
              </ErrorMessage>
              <CustomImputMask
                label={"CNPJ"}
                type="text"
                mask={"99.999.999/9999-99"}
                {...register("cnpj")}
              />
              <ErrorMessage>
                {errors.cnpj ? errors.cnpj.message : null}
              </ErrorMessage>

              <Input
                label={"Nome do Solicitante"}
                type="text"
                {...register("solicitante_nome")}
              />
              <ErrorMessage>
                {errors.solicitante_nome
                  ? errors.solicitante_nome.message
                  : null}
              </ErrorMessage>
              <Input label={"Email"} type="email" {...register("email")} />
              <ErrorMessage>
                {errors.email ? errors.email.message : null}
              </ErrorMessage>
              <Input
                label={"Telefone"}
                type="text"
                maxLength={15}
                onInput={handlePhoneNumberChange}
                {...register("telefone")}
              />
              <ErrorMessage>
                {errors.telefone ? errors.telefone.message : null}
              </ErrorMessage>
              <Button
                variant="primary"
                width="100%"
                // disabled={!isValid}
                type="submit"
              >
                Começar orçamento
              </Button>
            </form>
          </aside>
        </div>
      </Container>
      <ModalConcent />
    </>
  );
};
