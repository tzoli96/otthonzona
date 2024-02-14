import React, { useState, useEffect, useRef } from "react";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef();

  const setCookie = (name, value, hours) => {
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const handleInstagramOpen = () => {
    handleClose();
    window.open("https://www.instagram.com/otthonzona", "_blank");
  };

  const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    const popUpClosed = getCookie("popUpClosed");
    if (!popUpClosed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setCookie("popUpClosed", "true", 24);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup" ref={popUpRef}>
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <a href="https://www.instagram.com/otthonzona">
          <img src="/nyeremenyjatek.png" alt="Instagram" />
        </a>
        <button
          style={{
            width: "100%",
          }}
          className="orange-button mt-2"
          onClick={handleInstagramOpen}
        >
          Tovább a nyereményjátékra
        </button>
      </div>
    </div>
  );
};

export default PopUp;
