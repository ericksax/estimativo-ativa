import { ModalInfo } from "../modalInfo";
import { ModalDestroy } from "../modalDestroy";
import { SetStateAction } from "react";
import { ModalSendByMail } from "../modalByMail";
import { useModal } from "../../hooks/useModal";

interface CustomModalProps {
  setTableList: React.Dispatch<SetStateAction<AtivaProductProps[]>>;
}

export const CustomModal = ({ setTableList }: CustomModalProps) => {
  const { areYouSure, isOpen, sendMail } = useModal();
  return (
    <>
      {areYouSure ? (
        <ModalDestroy setTableList={setTableList} />
      ) : isOpen ? (
        <ModalInfo />
      ) : sendMail ? (
        <ModalSendByMail />
      ) : null}
    </>
  );
};
