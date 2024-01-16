const thousandSeparator = (x, sep = " ") =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep);

export function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Check if the cleaned phone number has at least 10 digits after the plus sign
  const isValidNumber = cleaned.length >= 10;

  if (isValidNumber) {
    // Insert spaces to format the phone number as "+36 30 654 79 36"
    return (
      "+" +
      cleaned.replace(/(\d{2})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5")
    );
  } else {
    // Return the original input if it doesn't have at least 10 digits
    return phoneNumber;
  }
}

export default thousandSeparator;
