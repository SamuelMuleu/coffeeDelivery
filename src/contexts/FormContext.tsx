import { createContext, FC, ReactNode, useContext, useState } from "react";

interface FormData {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface FormContextType {
  formData: FormData | undefined;
  setFormData: (data: FormData) => void;
}

interface OrderProviderProps {
  children: ReactNode;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: FC<OrderProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData | undefined>(undefined);



  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
