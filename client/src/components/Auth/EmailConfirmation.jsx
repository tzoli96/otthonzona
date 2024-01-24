import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const EmailConfirmation = () => {
  const { token } = useParams();

  useEffect(() => {
    if (token) {
      request(`/api/auth/confirm-email/${token}`, {
        method: "GET",
      }).then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setTimeout(() => {
            window.location = "/login";
          }, 1500);
        }
      });
    }
  }, [token]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      Email cím megerősítése...
    </div>
  );
};

export default EmailConfirmation;
