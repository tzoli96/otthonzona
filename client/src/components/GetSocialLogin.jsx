import React, { useEffect, useState } from "react";
import { request } from "../utils/request";
import Cookies from "js-cookie";

function GetSocialLogin () {

    const [emailNotVerified, setEmailNotVerified] = useState(false);
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const forgotPassword = false;

    useEffect(() => {
        request("/api/auth/social-login")
        .then((data) => {
            if (data.error) {
                if (data.error === "Email not verified") setEmailNotVerified(true);
                else if (data.error === "Incorrect email or password")
                  setWrongCredentials(true);
                else if (data.error === "User with this email does not exist")
                  setWrongCredentials(true);
              } else {
                if (!forgotPassword) {
                  Cookies.set("token", data.data.token);
                  window.location = "/post-ad";
                } else {
                }
              }
        })
    }, []);

    return "...";
}

export default GetSocialLogin;
