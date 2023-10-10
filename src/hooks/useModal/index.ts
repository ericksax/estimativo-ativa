import { useContext } from "react";
import { ModalContext } from "../../providers/modalContext";

export function useModal() {
  const {
    accept,
    clean,
    setClean,
    setAccept,
    areYouSure,
    setAreYouSure,
    sendMail,
    setSendMail,
  } = useContext(ModalContext);
  return {
    accept,
    setAccept,
    areYouSure,
    setAreYouSure,
    sendMail,
    setSendMail,
    clean,
    setClean,
  };
}
