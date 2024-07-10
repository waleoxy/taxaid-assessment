import { createContext, useEffect, useState } from "react";

interface ModalProviderProps {
  children: React.ReactNode;
}

export interface ModalData {
  data?: {
    user: string;
  };
}

export interface ModalContextType {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setOpen: function (): void {
    throw new Error("Function not implemented.");
  },
  setClose: function (): void {
    throw new Error("Function not implemented.");
  },
});

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const setOpen = async () => {
    setIsOpen(true);
  };

  const setClose = () => {
    setIsOpen(false);
  };

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ setOpen, isOpen, setClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
