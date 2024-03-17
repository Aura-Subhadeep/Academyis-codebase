export const formatPrice = (price: number): string => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(price);

  // Remove decimal points and trailing zeros if the price is a whole number
  return formattedPrice.replace(/\.00$/, "");
};