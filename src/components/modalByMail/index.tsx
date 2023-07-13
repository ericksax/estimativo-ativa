
import { Button } from "../../style/buttons"
import { Input } from "../Input"
import { StyledModal } from "../modalDestroy/style"
import { ModalSendMailContainer } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";

import { useModal } from "../../hooks/useModal";

interface ModalSendByMailProps {
  email: string
}

export const ModalSendByMail = () => {
  const {setSendMail} = useModal()
  const {handleSubmit, register, reset, formState: { errors }} = useForm<ModalSendByMailProps>();
  
  const submit: SubmitHandler<ModalSendByMailProps> = (formData) => {
    console.log(formData.email)
    reset()
  }

  // function generatePdf() {
  //   const doc = ''
  // }
  
  // async function inviteMail({formData, pdfBlob}: any) {
  //   const transporter = nodemailer.createTransport({
  //     service: 'youmail.com.br',
  //     auth: {
  //       user: 'youmail.com',
  //       pass: 'youmail.com'
  //     }
  //   })

  //   const mailOptions = {
  //     from: 'your_email@example.com',
  //     to: formData.email,
  //     subject: 'Email Subject',
  //     text: 'Email Body',
  //     attachments: [
  //       {
  //         filename: 'document.pdf',
  //         content: pdfBlob, 
  //       },
  //     ],
  //   }

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log('Error ocurred:', error);
    //   } else {
    //     console.log('Email sent:', info.response)
    //   }
    // })
  // }


  return (
    <StyledModal>
      <ModalSendMailContainer>
        <button onClick={() => setSendMail(false)}>X</button>  
        <strong>Enviar o orçamento para o email desejado</strong>
        <form onSubmit={handleSubmit(submit)}>
          <Input type="email" label="Endereço de email:" {...register('email')}/>
          {errors.email? errors.email.message : null}
          <Button variant="primary" width="100%">
            Enviar
          </Button>
        </form>
      </ModalSendMailContainer>
    </StyledModal>
  )
} 