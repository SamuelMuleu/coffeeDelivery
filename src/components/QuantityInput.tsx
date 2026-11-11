import { Minus, Plus } from "@phosphor-icons/react";
import styled from "styled-components";

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
  size?: "sm" | "md";
}

export function QuantityInput({ value, onChange, label, min = 1, max = 99, size = "md" }: QuantityInputProps) {
  return (
    <Wrapper $size={size} role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= min} aria-label="Diminuir quantidade">
        <Minus size={14} weight="bold" />
      </button>
      <span aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label="Aumentar quantidade">
        <Plus size={14} weight="bold" />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $size: "sm" | "md" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  height: ${({ $size }) => ($size === "sm" ? "2rem" : "2.375rem")};
  padding: 0 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.button};

  span {
    min-width: 1.25rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
  }

  button {
    display: grid;
    place-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: ${({ theme }) => theme.colors.purple};

    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.colors.purpleDark};
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;
