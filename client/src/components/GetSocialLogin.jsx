import React, { useEffect, useState } from "react";
import { request } from "../utils/request";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import {toast} from "react-hot-toast";
import useSignIn from "react-auth-kit/hooks/useSignIn";
function GetSocialLogin() {
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();

  useEffect(() => {
    const handleSocialLogin = async () => {
      try {
        const response = await request("/api/auth/social-login");
        console.log(response)
        if (response.status !== 200) {
          handleLoginError();
        } else {
          handleSuccessfulLogin(response);
        }
      } catch (error) {
        console.error("Error during social login:", error);
      }
    };

    const handleLoginError = () => {
      navigate("/login")
      toast.error("Sikertelen bejelentkezés")
    };

    const handleSuccessfulLogin = (data) => {
      const { token } = data.data;
      const { pwHash,userRole, ...userData } = data.data.user;
      const expiresAt = 3600;
      const encryptedPermissions = data.data.user.userRole.userRolePermissions.map(item => {
        const permissionString = JSON.stringify(item.permission);
        const encryptedPermission = CryptoJS.AES.encrypt(permissionString, 'yourSecretKey').toString();
        return encryptedPermission;
      });

      if (signIn({
        auth: {
          token,
          expiresAt,
          type: 'Bearer'
        },
        userState: {
          userData,
          encryptedPermissions
        }
      })) {
        navigate("/post-ad");
        toast.success("Sikeresen bejelentkeztél");

      } else {
        toast.error("Nem sikerült bejelentkezni");
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
