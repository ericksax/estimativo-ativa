import { SetStateAction, createContext, useState } from "react";

interface ModalContextProps {
  setAccept: React.Dispatch<SetStateAction<boolean>>;
  setAreYouSure: React.Dispatch<SetStateAction<boolean>>;
  setSendMail: React.Dispatch<SetStateAction<boolean>>;
  setClean: React.Dispatch<SetStateAction<boolean>>;
  areYouSure: boolean;
  accept: boolean;
  sendMail: boolean;
  clean: boolean;
}

export const ModalContext = createContext({} as ModalContextProps);

interface ModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [accept, setAccept] = useState(true);
  const [areYouSure, setAreYouSure] = useState(false);
  const [sendMail, setSendMail] = useState(false);
  const [clean, setClean] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        areYouSure,
        setAreYouSure,
        accept,
        clean,
        setClean,
        setAccept,
        sendMail,
        setSendMail,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
