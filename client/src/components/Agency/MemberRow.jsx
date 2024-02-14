import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { request } from "../../utils/request";
import { useIsSmallerScreen } from "../../utils/useIsMobile";
import { Link } from "react-router-dom";

function MemberRow({ member, handleRemoveMember, isAdmin, agencyId }) {
  const [rowCollapsed, setRowCollapsed] = useState(true);
  const [creditAmount, setCreditAmount] = useState(0);
  const gridRef = useRef(null);
  const isSmallerScreen = useIsSmallerScreen(1535);

  const toggleRow = () => {
    if (rowCollapsed) {
      gridRef.current.style.maxHeight = gridRef.current.scrollHeight + "px";
    } else {
      gridRef.current.style.maxHeight = null;
    }
    setRowCollapsed(!rowCollapsed);
  };

  const handleSendCredit = async (memberId) => {
    try {
      const response = await request("/api/agency/credit-sending", {
        method: "POST",
        body: JSON.stringify({
          memberId: memberId,
          amount: creditAmount,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.message) {
        toast.success(response.message);
        window.location.reload();
      }
    } catch (error) {
      //console.error("Error in sending credits:", error); // Log the complete error object
      const errorMessage =
        error.response?.data?.message || error.message || "Unknown error";
      toast.error("Kreditek küldése sikertelen: " + errorMessage);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row border-b border-gray-300 py-2 items-center">
      <div className="w-full xl:w-2/12 pr-2 break-words max-xl:my-2">
        <Link to={`/agent/${member.id}`} target="_blank" className="underline">
          {member.name}
        </Link>
      </div>
      <div className="w-full xl:w-3/12 pr-2 break-words max-xl:my-2">
        {member.email}
      </div>
      <div className="w-full xl:w-2/12 pr-2 max-xl:my-2">{member.role}</div>

      {isAdmin ? (
        <div className="w-full xl:w-5/12 pr-2 flex !flex-row max-sm:!flex-col !items-start sm:!items-center max-xl:my-2">
          <button
            className="bg-red-500 text-white py-1 px-3 rounded-full mr-2"
            onClick={() => handleRemoveMember(member.id)}
          >
            Törlés
          </button>

          <div className="flex !flex-row justify-start sm:max-xl:justify-end max-sm:mt-5 w-full items-center">
            <input
              type="number"
              className="border border-gray-300 rounded-full p-1.5 px-4 mr-2 w-[90px]"
              value={creditAmount}
              onChange={(e) => setCreditAmount(e.target.value)}
              placeholder="Kredit mennyiség"
            />

            <button
              className="blue-button text-white py-1 px-3 !h-[38px] max-w-[200px]"
              onClick={() => handleSendCredit(member.id)}
            >
              {isSmallerScreen ? "Küldés" : "Kredit küldése"}
            </button>

            <div className="text-gray-600 ml-2">{member.credit} Kredit</div>
          </div>
        </div>
      ) : (
        <div className="w-full xl:w-5/12 pr-2 max-xl:my-2">
          {member.propertyCount} Ingatlanok
        </div>
      )}
    </div>
  );
}

export default MemberRow;
