import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../Elements/Input";
import loginImage from "../../pictures/login.png";
import { Link } from "react-router-dom";
import { api, request } from "../../utils/request";
import convertFormDataToJson from "../../utils/fd";
import Cookies from "js-cookie";
import fbIcon from "../../pictures/facebook.svg";
import googleIcon from "../../pictures/google.svg";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import CryptoJS from 'crypto-js';

function Login() {
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleSignIn = (data) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const json = convertFormDataToJson(e.target);

    let apiEndpoint = forgotPassword
      ? "/api/auth/forgot-password"
      : "/api/auth/login";

    request(apiEndpoint, {
      body: JSON.stringify(json),
      method: "POST",
    }).then((data) => {
      if (data.error) {
        if (data.error === "Email not verified") setEmailNotVerified(true);
        else if (data.error === "Incorrect email or password")
          setWrongCredentials(true);
        else if (data.error === "User with this email does not exist")
          setWrongCredentials(true);
      } else {
        if (!forgotPassword) {
          handleSignIn(data);
        } else {
          setEmailSent(true);
        }
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="lg:grid grid-cols-2 bg-gray-50">
        <div className="max-lg:hidden bg-[rgb(247,247,247)]">
          <img
            className="min-w-full min-h-full object-contain"
            src={loginImage}
          />
        </div>
        <div className="p-6 md:p-16 flex justify-center items-center bg-[rgb(247,247,247)]">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold my-8">
              <span className="text-orange">Üdv újra itt! </span>
              <br />
              Jelentkezz be a fiókodba
            </h1>
            <p className="text-lightgrey text-lg w-full 2xl:w-2/3">
              Szolgáltatásunk igénybevételéhez be kell jelentkezned. Ha még
              nincs fiókod, akkor kérjük regisztrálj.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="my-8 w-full 2xl:w-2/3">
                <p className="font-bold my-2">E-mail cím</p>
                {emailNotVerified && (
                  <div className="alert-box">Email cím nincs megerősítve!</div>
                )}
                {wrongCredentials && (
                  <div className="alert-box">Hibás email cím vagy jelszó!</div>
                )}
                {emailSent && (
                  <div className="alert-box-blue">
                    Jelszó helyrteállító link elküldve az email címedre!
                  </div>
                )}
                <Input
                  placeholder="Írd be az e-mail címed"
                  name="email"
                  type="email"
                  required
                />
              </div>
              {!forgotPassword && (
                <div className="mb-4 w-full 2xl:w-2/3">
                  <p className="font-bold my-2">Jelszó</p>
                  <Input
                    placeholder="Írd be a jelszavad"
                    name="password"
                    type="password"
                    required
                  />
                </div>
              )}
              <div className="w-full 2xl:w-2/3">
                <span
                  className="float-right text-sm font-medium text-gray-600 cursor-pointer"
                  onClick={() => setForgotPassword(!forgotPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {forgotPassword
                    ? "Bejelentkezés"
                    : "Elfelejtettem a jelszavam"}
                </span>
              </div>
              <div className="w-full 2xl:w-2/3 mt-16">
                <button type="submit" className="orange-button !w-full">
                  {forgotPassword ? "Jelszó helyreállítása" : "Bejelentkezés"}
                </button>
              </div>
              {<div className="flex flex-col lg:flex-row gap-5 py-5">
                <Link to={api + "/api/auth/facebook"}>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-full p-2">
                    <img
                      src={fbIcon}
                      alt="Facebook logo"
                      className="w-[35px]"
                    />
                    <p className="text-[#949494] font-bold text-sm">
                      Folytatás Facebook-kal
                    </p>
                  </div>
                </Link>
                <Link to={api + "/api/auth/google"}>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-full p-2">
                    <img
                      src={googleIcon}
                      alt="Google logo"
                      className="w-[35px]"
                    />
                    <p className="text-[#949494] font-bold text-sm">
                      Folytatás Google-al
                    </p>
                  </div>
                </Link>
                  </div>}
            </form>
            <div className="bg-gray-300 w-full h-[1px] xl:w-2/3 my-8" />
            <Link to="/register">
              <div className="w-full 2xl:w-2/3">
                <button className="blue-button !w-full">
                  Még nincs fiókod? Hozz létre egyet!
                </button>
              </div>
            </Link>
            <Link to="/agency-register">
              <div className="w-full 2xl:w-2/3 mt-5">
                <button className="blue-button !w-full">
                  Ingatlan irodát szeretnék regisztrálni!
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
