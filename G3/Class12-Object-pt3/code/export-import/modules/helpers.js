export const formatDate = (date) => {
  return date.toLocaleDateString();
};

export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

export default class Helper {
  static validateEmail(email) {
    return email.includes("@");
  }
}
