# Coffee Delivery

Loja de cafés com catálogo, carrinho e checkout com endereço e forma de pagamento, feita em **React + TypeScript** com **styled-components** e **Context API**.

🔗 **Demo:** https://coffeefastdelivery.netlify.app

## Funcionalidades

- Catálogo com 14 cafés, tags e seletor de quantidade
- Carrinho com `useReducer` + Context: soma itens repetidos, altera quantidades, remove e calcula subtotal, entrega e total
- Carrinho e último pedido salvos no `localStorage` (sobrevivem ao recarregar a página)
- Checkout com `react-hook-form`: validação de campos, preenchimento automático do endereço pelo CEP ([ViaCEP](https://viacep.com.br)) e forma de pagamento obrigatória
- Tela de confirmação com endereço, previsão e pagamento
- Layout responsivo e acessível (rótulos, `radiogroup`, foco visível)

## Stack

React 18 · TypeScript · Vite · styled-components · React Router · react-hook-form · Phosphor Icons

## Rodando localmente

```bash
npm install
npm run dev
npm run build   # typecheck + build de produção
npm run lint
```

## Estrutura

```
src/
  data/coffees.ts            # catálogo, taxa de entrega e formatação de preço
  data/order.ts              # tipos de endereço, pedido e pagamento
  contexts/CartContext.tsx   # estado do carrinho (reducer) + persistência
  components/                # Header, Article (hero), Cards, QuantityInput
  pages/                     # Home, Checkout, Sucess
  styles/themes/             # tema e estilos globais
```
