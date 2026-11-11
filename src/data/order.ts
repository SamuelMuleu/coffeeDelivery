export type PaymentMethod = "credit" | "debit" | "cash";

export const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  credit: "Cartão de crédito",
  debit: "Cartão de débito",
  cash: "Dinheiro",
};

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  uf: string;
}

export interface Order {
  address: Address;
  payment: PaymentMethod;
  total: number;
}
