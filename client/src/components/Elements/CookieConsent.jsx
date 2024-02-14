import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  // State to manage the display of the consent box
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if cookie consent has been given
    const consentGiven = localStorage.getItem("cookieConsentGiven");
    if (consentGiven !== "true") {
      setVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Set consent given in localStorage
    localStorage.setItem("cookieConsentGiven", "true");
    setVisible(false);
  };

  // Return early if consent has already been given
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md text-center z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 flex-grow">
            A weboldalunk sütiket használ a felhasználói élmény javítása
            érdekében. A weboldal használatával elfogadod a sütik használatát.
            Részletekért tekints meg az{" "}
            <a
              href="/adatvedelmi_cookie.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              {" Adatvédelmi és Cookie tájékoztatót."}
            </a>
          </p>
          <button
            className="text-white px-3 py-1 rounded-md text-sm ml-4 orange-button-cookie"
            onClick={handleAcceptCookies}
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
