import z from "zod";

export const zodModalSchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve possuir no mínimo três caracteres.")
    .nonempty(),
  adress: z.string().min(20, "Preencha o endereço completo.").nonempty(),
  cnpj: z
    .string()
    .min(14)
    .regex(
      new RegExp(/^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/),
      "CNPJ inválido"
    )
    .nonempty(),
  contact: z
    .string()
    .min(10, "Contato deve ter no mínimo doze caracteres")
    .nonempty(),
});

export type FormValuesProps = z.infer<typeof zodModalSchema>;
