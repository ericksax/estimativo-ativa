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
    .refine((value) => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value), {
      message:
        "Digite um telefone válido no formato (99) 9999-9999 ou (99) 99999-9999",
    }),
});

export type FormValuesProps = z.infer<typeof zodInfoSchema>;
