import { useContext } from "react"
import { ModalContext } from "../../providers/modalContext"

export function useModal() {
  const { isOpen, setIsOpen, areYouSure, setAreYouSure, sendMail, setSendMail } = useContext(ModalContext)
  return {
    isOpen,
    setIsOpen,
    areYouSure,
    setAreYouSure,
    sendMail,
    setSendMail
  }
}

