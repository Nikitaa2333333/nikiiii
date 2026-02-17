import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'feedback' | 'pdf' | null;

interface ModalContextType {
  activeModal: ModalType;
  productName: string;
  pdfUrl: string;
  openModal: (productName?: string) => void;
  openPDFModal: (url: string) => void;
  closeModal: () => void;
  isOpen: boolean; // Keep for backward compatibility if needed, but activeModal is better
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [productName, setProductName] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const openModal = (name: string = '') => {
    setProductName(name);
    setActiveModal('feedback');
  };

  const openPDFModal = (url: string) => {
    setPdfUrl(url);
    setActiveModal('pdf');
  };

  const closeModal = () => {
    setActiveModal(null);
    setProductName('');
    setPdfUrl('');
  };

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        isOpen: activeModal !== null,
        openModal,
        openPDFModal,
        closeModal,
        productName,
        pdfUrl
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
