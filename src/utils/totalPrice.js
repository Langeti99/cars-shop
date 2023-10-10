import { changeToCurrency } from "./changeToCurrency";

export const calcTotalPrice = (items) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const value = changeToCurrency(totalPrice, "PLN");
  return value;
};
