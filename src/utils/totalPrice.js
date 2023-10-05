export const calcTotalPrice = (items) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formatedMoney = moneyFormatter.format(totalPrice);
  return formatedMoney;
};
