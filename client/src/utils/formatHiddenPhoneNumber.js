const formatHiddenPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, "");

  if (cleaned.length >= 10) {
    return (
        "+" +
        cleaned.replace(/(\d{2})(\d{2})(\d{3})\d{2}\d{2}/, "$1 $2 $3 ••••")
    );
  } else {
    return phoneNumber;
  }
};

export default formatHiddenPhoneNumber;
