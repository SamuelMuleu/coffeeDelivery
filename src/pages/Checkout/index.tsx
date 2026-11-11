import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { useCart } from "../../contexts/CartContext";
import { Address, PAYMENT_LABELS, PaymentMethod } from "../../data/order";
import { formatPrice } from "../../data/coffees";
import { QuantityInput } from "../../components/QuantityInput";
import {
  Box,
  BoxHeader,
  CartItem,
  CheckoutContainer,
  ConfirmButton,
  EmptyCart,
  Field,
  FieldsGrid,
  PaymentOptions,
  Summary,
} from "./style";

type FormValues = Address & { payment: PaymentMethod };

const PAYMENT_ICONS = { credit: CreditCard, debit: Bank, cash: Money };

export const Checkout = () => {
  const { items, subtotal, deliveryFee, total, setQuantity, removeItem, checkout } = useCart();
  const navigate = useNavigate();
  const [cepStatus, setCepStatus] = useState<"idle" | "loading" | "error">("idle");
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FormValues> = ({ payment, ...address }) => {
    checkout({ ...address, uf: address.uf.toUpperCase() }, payment);
    navigate("/success");
  };

  // Fills the address from the CEP using the public ViaCEP API
  async function lookupCep(raw: string) {
    const cep = raw.replace(/\D/g, "");
    if (cep.length !== 8) return;
    setCepStatus("loading");
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if (data.erro) throw new Error("CEP não encontrado");
      setValue("street", data.logradouro, { shouldValidate: true });
      setValue("district", data.bairro, { shouldValidate: true });
      setValue("city", data.localidade, { shouldValidate: true });
      setValue("uf", data.uf, { shouldValidate: true });
      setCepStatus("idle");
      setFocus("number");
    } catch {
      setCepStatus("error");
    }
  }

  if (items.length === 0) {
    return (
      <EmptyCart>
        <h1>Seu carrinho está vazio</h1>
        <p>Escolha seus cafés favoritos para continuar.</p>
        <Link to="/">Ver cafés</Link>
      </EmptyCart>
    );
  }

  const error = (name: keyof FormValues) => errors[name]?.message as string | undefined;

  return (
    <CheckoutContainer as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <section>
        <h2>Complete seu pedido</h2>

        <Box>
          <BoxHeader $icon="yellowDark">
            <MapPinLine size={22} aria-hidden />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </BoxHeader>

          <FieldsGrid>
            <Field $area="cep" $error={!!error("cep")}>
              <label htmlFor="cep" className="sr-only">CEP</label>
              <input
                id="cep"
                placeholder="CEP"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={9}
                aria-invalid={!!error("cep")}
                {...register("cep", {
                  required: "Informe o CEP",
                  pattern: { value: /^\d{5}-?\d{3}$/, message: "CEP inválido" },
                  onBlur: (e) => lookupCep(e.target.value),
                })}
              />
              {cepStatus === "loading" && <small>Buscando endereço...</small>}
              {cepStatus === "error" && <small>CEP não encontrado, preencha manualmente</small>}
              {error("cep") && <small role="alert">{error("cep")}</small>}
            </Field>
            <Field $area="street" $error={!!error("street")}>
              <label htmlFor="street" className="sr-only">Rua</label>
              <input id="street" placeholder="Rua" autoComplete="address-line1" {...register("street", { required: "Informe a rua" })} />
              {error("street") && <small role="alert">{error("street")}</small>}
            </Field>
            <Field $area="number" $error={!!error("number")}>
              <label htmlFor="number" className="sr-only">Número</label>
              <input id="number" placeholder="Número" {...register("number", { required: "Informe o número" })} />
              {error("number") && <small role="alert">{error("number")}</small>}
            </Field>
            <Field $area="complement">
              <label htmlFor="complement" className="sr-only">Complemento</label>
              <input id="complement" placeholder="Complemento" autoComplete="address-line2" {...register("complement")} />
              <em>Opcional</em>
            </Field>
            <Field $area="district" $error={!!error("district")}>
              <label htmlFor="district" className="sr-only">Bairro</label>
              <input id="district" placeholder="Bairro" {...register("district", { required: "Informe o bairro" })} />
              {error("district") && <small role="alert">{error("district")}</small>}
            </Field>
            <Field $area="city" $error={!!error("city")}>
              <label htmlFor="city" className="sr-only">Cidade</label>
              <input id="city" placeholder="Cidade" autoComplete="address-level2" {...register("city", { required: "Informe a cidade" })} />
              {error("city") && <small role="alert">{error("city")}</small>}
            </Field>
            <Field $area="uf" $error={!!error("uf")}>
              <label htmlFor="uf" className="sr-only">UF</label>
              <input
                id="uf"
                placeholder="UF"
                maxLength={2}
                autoComplete="address-level1"
                {...register("uf", {
                  required: "UF",
                  pattern: { value: /^[A-Za-z]{2}$/, message: "UF inválida" },
                })}
              />
              {error("uf") && <small role="alert">{error("uf")}</small>}
            </Field>
          </FieldsGrid>
        </Box>

        <Box>
          <BoxHeader $icon="purple">
            <CurrencyDollar size={22} aria-hidden />
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </BoxHeader>

          <PaymentOptions role="radiogroup" aria-label="Forma de pagamento">
            {(Object.keys(PAYMENT_LABELS) as PaymentMethod[]).map((method) => {
              const Icon = PAYMENT_ICONS[method];
              return (
                <label key={method}>
                  <input type="radio" value={method} {...register("payment", { required: "Escolha a forma de pagamento" })} />
                  <span>
                    <Icon size={16} aria-hidden />
                    {PAYMENT_LABELS[method]}
                  </span>
                </label>
              );
            })}
          </PaymentOptions>
          {error("payment") && <p role="alert" className="error">{error("payment")}</p>}
        </Box>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <Summary>
          <ul>
            {items.map(({ coffee, quantity }) => (
              <CartItem key={coffee.id}>
                <img src={coffee.image} alt="" width={64} height={64} />
                <div>
                  <p>{coffee.name}</p>
                  <div>
                    <QuantityInput
                      size="sm"
                      value={quantity}
                      onChange={(q) => setQuantity(coffee.id, q)}
                      label={`Quantidade de ${coffee.name}`}
                    />
                    <button type="button" onClick={() => removeItem(coffee.id)}>
                      <Trash size={16} aria-hidden /> Remover
                    </button>
                  </div>
                </div>
                <strong>R$ {formatPrice(coffee.price * quantity)}</strong>
              </CartItem>
            ))}
          </ul>

          <dl>
            <div>
              <dt>Total de itens</dt>
              <dd>R$ {formatPrice(subtotal)}</dd>
            </div>
            <div>
              <dt>Entrega</dt>
              <dd>R$ {formatPrice(deliveryFee)}</dd>
            </div>
            <div>
              <dt>Total</dt>
              <dd>R$ {formatPrice(total)}</dd>
            </div>
          </dl>

          <ConfirmButton type="submit">Confirmar pedido</ConfirmButton>
        </Summary>
      </section>
    </CheckoutContainer>
  );
};
