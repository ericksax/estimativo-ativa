import { SetStateAction, createContext, useState } from "react";

interface ModalContextProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  setAreYouSure: React.Dispatch<SetStateAction<boolean>>
  setSendMail:  React.Dispatch<SetStateAction<boolean>>
  areYouSure: boolean
  isOpen: boolean,
  sendMail: boolean,
}

export const ModalContext = createContext({} as ModalContextProps);

interface ModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [areYouSure, setAreYouSure] = useState(false);
  const [sendMail, setSendMail] = useState(false);

  return <ModalContext.Provider value={{
    areYouSure,
    setAreYouSure,
    isOpen,
    setIsOpen,
    sendMail,
    setSendMail
  }}>{children}</ModalContext.Provider>;
}
