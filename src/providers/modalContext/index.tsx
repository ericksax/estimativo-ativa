import { SetStateAction, createContext, useContext, useState } from "react";

interface ModalContextProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

const ModalContext = createContext({} as ModalContextProps);

interface ModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(true)
  return <ModalContext.Provider value={{
    isOpen,
    setIsOpen
  }}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext)
  return {
    isOpen,
    setIsOpen
  }
}