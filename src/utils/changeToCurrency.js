export const changeToCurrency = (number, currency) => {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  });

  const formatedMoney = moneyFormatter.format(number);
  return formatedMoney;
};
