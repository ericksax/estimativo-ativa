import { ModalDestroy } from "../modalDestroy";
import { SetStateAction } from "react";
import { ModalSendByMail } from "../modalByMail";
import { useModal } from "../../hooks/useModal";
import { ModalCleanList } from "../ModalCleanList";

interface CustomModalProps {
  setTableList: React.Dispatch<SetStateAction<AtivaProductProps[]>>;
}

export const ModalCustom = ({ setTableList }: CustomModalProps) => {
  const { areYouSure, sendMail, clean } = useModal();
  return (
    <>
      {areYouSure ? (
        <ModalDestroy setTableList={setTableList} />
      ) : sendMail ? (
        <ModalSendByMail />
      ) : clean ? (
        <ModalCleanList setTableList={setTableList} />
      ) : null}
    </>
  );
};
