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
  name: string;
  contact: string;
  cnpj: string;
  requester: string;
  email: string;
}

const arrayCount = [];
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
    formState: { errors },
  } = useForm<FormValuesProps>({
    resolver: zodResolver(zodInfoSchema),
  });

  function submit(formData: FormDataProps) {
    const formatedCNPJ = insertCNPJMask(formData.cnpj);

    const simpleCount = () => {
      arrayCount.push("item");
      return arrayCount.length;
    };

    const formatedData = {
      ...formData,
      id: simpleCount(),
      cnpj: formatedCNPJ,
      accept: true,
    };

    localStorage.setItem("@EstimativOrc", JSON.stringify(formatedData));
    reset({ cnpj: "", requester: "", name: "", email: "", contact: "" });
  }

  return (
    <>
      <Container>
        <div className="box-content">
          <section className="info">
            <h1>Olá, Seja bem vindo!</h1>
            <p>
              Esse é o Ativa orçamentos estimativos, preencha os campos ao lado
              para ter acesso ao sistema de orçamento.{" "}
            </p>
          </section>
          <aside>
            <form onSubmit={handleSubmit(submit)}>
              <Input
                label={"Nome da instituição ou órgão público:"}
                type="text"
                {...register("name")}
              />
              <ErrorMessage>
                {errors.name ? errors.name.message : null}
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
                {...register("requester")}
              />
              <ErrorMessage>
                {errors.requester ? errors.requester.message : null}
              </ErrorMessage>
              <Input label={"Email"} type="email" {...register("email")} />
              <ErrorMessage>
                {errors.email ? errors.email.message : null}
              </ErrorMessage>
              <CustomImputMask
                label={"Telefone"}
                type="text"
                mask={"(99) 99999-9999"}
                {...register("contact")}
              />
              <ErrorMessage>
                {errors.contact ? errors.contact.message : null}
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
