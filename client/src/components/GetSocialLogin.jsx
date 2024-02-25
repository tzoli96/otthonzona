import React, { useEffect, useState } from "react";
import { request } from "../utils/request";
import Cookies from "js-cookie";

function GetSocialLogin() {
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const forgotPassword = false;

  useEffect(() => {
    const handleSocialLogin = async () => {
      try {
        const response = await request("/api/auth/social-login");
        console.log(response)
        if (response.error) {
          handleLoginError(response.error);
        } else {
          handleSuccessfulLogin(response.data.token);
        }
      } catch (error) {
        console.error("Error during social login:", error);
      }
    };

    const handleLoginError = (errorType) => {
      switch (errorType) {
        case "Email not verified":
          setEmailNotVerified(true);
          break;
        case "Incorrect email or password":
        case "User with this email does not exist":
          setWrongCredentials(true);
          break;
        default:
          console.error("Unhandled error:", errorType);
          break;
      }
    };

    const handleSuccessfulLogin = (token) => {
      if (!forgotPassword) {
        Cookies.set("token", token);
        window.location = "/post-ad";
      } else {
        // Ide írhatod a kódodat, ha elfelejtett jelszó esetén más történik
      }
    };

    // Hívjuk meg a fő függvényt
    handleSocialLogin();
  }, []);


  return (
    <div>
      {emailNotVerified && <p>Email címed nincs megerősítve.</p>}
      {wrongCredentials && (
        <p>Hibás bejelentkezési adatok, kérjük próbáld újra.</p>
      )}
      {!emailNotVerified && !wrongCredentials && (
        <p>Bejelentkezés... Kérjük várj.</p>
      )}
    </div>
  );
}

export default GetSocialLogin;
