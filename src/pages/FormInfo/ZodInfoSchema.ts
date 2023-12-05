import z from "zod";

export const zodInfoSchema = z.object({
  orgao_nome: z
    .string()
    .min(3, "O nome deve possuir no mínimo três caracteres.")
    .nonempty(),
  solicitante_nome: z
    .string()
    .min(3, "O nome deve possuir no mínimo três caracteres.")
    .nonempty(),
  email: z.string().email("Insira um email válido."),
  cnpj: z
    .string()
    .min(14, "CNPJ deve conter no mínimo 14 caracteres.")
    .regex(
      new RegExp(/^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/),
      "CNPJ inválido"
    )
    .nonempty(),
  telefone: z
    .string()
    .min(11, "Contato deve ter no mínimo doze caracteres")
    .regex(
      new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/),
      "Contato Inválido"
    ),
});

export type FormValuesProps = z.infer<typeof zodInfoSchema>;
