'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface CVContextType {
  isOpen: boolean;
  openCV: () => void;
  closeCV: () => void;
}

const CVContext = createContext<CVContextType>({
  isOpen: false, openCV: () => {}, closeCV: () => {},
});

export function CVProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CVContext.Provider value={{
      isOpen,
      openCV: () => { setIsOpen(true); document.body.style.overflow = 'hidden'; },
      closeCV: () => { setIsOpen(false); document.body.style.overflow = ''; },
    }}>
      {children}
    </CVContext.Provider>
  );
}

export const useCV = () => useContext(CVContext);
