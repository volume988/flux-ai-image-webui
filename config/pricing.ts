export const plans = {
  free: {
    title: "Free Plan",
    price: 0,
    credits: 5,
  },
  basic: {
    title: "Basic Plan",
    price: 9.99,
    credits: 100,
    variantId: process.env.NODE_ENV === "development" ? 486643 : 487032,
  },
  pro: {
    title: "Pro Plan",
    price: 19.99,
    credits: 300,
    variantId: process.env.NODE_ENV === "development" ? 486641 : 487034,
  },
  premium: {
    title: "Premium Plan",
    price: 29.99,
    credits: 500,
    variantId: process.env.NODE_ENV === "development" ? 486642 : 487031,
  },
};
