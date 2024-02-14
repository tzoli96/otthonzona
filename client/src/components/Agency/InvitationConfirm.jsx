import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../utils/request";
import { toast } from "react-hot-toast";

const InvitationConfirm = () => {
  const { token } = useParams();

  useEffect(() => {
    if (token) {
      request(`/api/agency/confirm-invite/${token}`, {
        method: "GET",
      }).then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          setTimeout(() => {
            window.location = "/agency";
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
      Csatlakozás...
    </div>
  );
};

export default InvitationConfirm;
