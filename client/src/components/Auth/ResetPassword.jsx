import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Input from "../Elements/Input";
import loginImage from "../../pictures/login.png";
import { useParams } from "react-router-dom";
import { request } from "../../utils/request";
import convertFormDataToJson from "../../utils/fd";

function ResetPassword() {
  const { token } = useParams();
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const json = convertFormDataToJson(e.target);

    if (json.newPassword !== json.confirmNewPassword) {
      setPasswordMismatch(true); // Set state if passwords don't match
      return;
    }

    setPasswordMismatch(false);

    // Add your logic to validate that "New Password" and "Confirm New Password" are the same

    // Send the new password along with the token to the server
    request(`/api/auth/reset-password/${token}`, {
      body: JSON.stringify(json),
      method: "POST",
    }).then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        setTimeout(() => {
          window.location = "/login";
        }, 500);
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 bg-gray-50">
        <div>
          <img className="min-w-full min-h-full" src={loginImage} />
        </div>
        <div className="p-16 flex justify-center items-center bg-[rgb(247,247,247)]">
          <div>
            <h1 className="text-4xl font-bold my-8">
              <span className="text-orange">Jelszó visszaállítása </span>
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="my-8">
                <p className="font-bold my-2">Új jelszó megadása</p>
                <Input
                  placeholder="Írd be az új jelszavad"
                  name="newPassword"
                  type="password"
                  required
                />
              </div>
              <div className="mb-4">
                <p className="font-bold my-2">Új jelszó megerősíése</p>
                <Input
                  placeholder="Írd be az új jelszavad"
                  name="confirmNewPassword"
                  type="password"
                  required
                />
              </div>
              <div className="mt-16">
                <button type="submit" className="orange-button !w-full">
                  Jelszó megváltoztatása
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
