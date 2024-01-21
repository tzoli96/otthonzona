import React, { useState, useEffect, useContext } from "react";
import Layout from "../Elements/AppLayout";
import Input from "../Elements/Input";
import { toast } from "react-hot-toast";
import { request } from "../../utils/request";
import MemberRow from "./MemberRow";
import { AppContext } from "../../App";

function CreateAgency() {
  const [agency, setAgency] = useState(null);
  const [officeName, setOfficeName] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [officeEmail, setOfficeEmail] = useState("");
  const [officePhone, setOfficePhone] = useState("");
  const [officeCompany, setOfficeCompany] = useState("");
  const [network, setnetwork] = useState("");

  const [inviteEmail, setInviteEmail] = useState("");
  const [members, setMembers] = useState([]);
  const [pendingInvitations, setPendingInvitations] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useContext(AppContext);

  useEffect(() => {
    async function fetchAgencyData() {
      try {
        const response = await request("/api/agency/myAgency", {
          method: "GET",
        });
        if (response.data) {
          setAgency(response.data);
          setOfficeName(response.data.officeName);
          setOfficeAddress(response.data.officeAddress);
          setOfficeEmail(response.data.officeEmail);
          setOfficePhone(response.data.officePhone);
          setOfficeCompany(response.data.officeCompany);
          setnetwork(response.data.network);
          setIsAdmin(response.data.adminID === user.id);
          fetchMembers(response.data.id);
        }
      } catch (error) {
        console.error("Error fetching agency data:", error);
      }
    }

    if (user) {
      fetchAgencyData();
    }
  }, [user]);

  useEffect(() => {
    console.log("Updated members state:", members);
  }, [members]);

  async function fetchMembers(agencyId) {
    console.log("fetchMembers called with agencyId:", agencyId);
    const url = `/api/agency/${agencyId}/members`;
    console.log("API URL:", url);

    try {
      const membersResponse = await request(`/api/agency/${agencyId}/members`, {
        method: "GET",
      });
      console.log("API Response:", membersResponse);
      if (membersResponse.members) {
        console.log("Members data:", membersResponse.members);
        setMembers(membersResponse.members); // Update members state
      }
    } catch (error) {
      console.error("Error fetching agency members:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const agencyData = {
      officeName,
      officeAddress,
      officeEmail,
      officePhone,
      officeCompany,
      network,
    };

    try {
      let res;
      if (agency) {
        // Modify existing agency
        res = await request(`/api/agency/${agency.id}`, {
          method: "PUT",
          body: JSON.stringify(agencyData),
          headers: { "Content-Type": "application/json" },
        });
      } else {
        // Create new agency
        res = await request("/api/agency", {
          method: "POST",
          body: JSON.stringify(agencyData),
          headers: { "Content-Type": "application/json" },
        });
      }
      // Handle response here
      toast.success(
        agency ? "Iroda sikeresen szerkesztve" : "Iroda sikeresen létrehozva"
      );
    } catch (error) {
      toast.error("Error saving agency data");
    }
  };

  const handleSendInvite = async () => {
    try {
      const response = await request(`/api/agency/${agency.id}/invite`, {
        method: "POST",
        body: JSON.stringify({ email: inviteEmail }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.error) {
        toast.error("Error sending invitation: " + response.error);
      } else {
        setPendingInvitations([
          ...pendingInvitations,
          { email: inviteEmail, status: "Pending" },
        ]);
        setInviteEmail(""); // Reset the input field
        toast.success("Meghívás elküldve");
      }
    } catch (error) {
      console.error("Error sending invitation:", error);
      toast.error("Error sending invitation");
    }
  };

  const handleRemoveMember = async (memberId) => {
    try {
      const response = await request(
        `/api/agency/${agency.id}/members/${memberId}`,
        {
          method: "DELETE",
        }
      );

      if (response.error) {
        toast.error("Error removing member: " + response.error);
      } else {
        setMembers(members.filter((member) => member.id !== memberId));
        toast.success("Ügynök eltávolítva");
      }
    } catch (error) {
      console.error("Error removing member:", error);
      toast.error("Error removing member");
    }
  };

  return (
    <Layout selected={7}>
      <form onSubmit={handleSubmit}>
        <div className="p-8">
          {agency ? (
            // Display agency data and members if agency exists
            <div>
              <p className="card-heading my-4">Ingatlan irodám</p>
              <div className="card p-8 !rounded-2xl my-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold my-2">Iroda neve*</p>
                    <Input
                      variant="white"
                      value={officeName}
                      onChange={(e) => setOfficeName(e.target.value)}
                      name="officeName"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-bold my-2">Iroda címe*</p>
                    <Input
                      variant="white"
                      value={officeAddress}
                      onChange={(e) => setOfficeAddress(e.target.value)}
                      name="officeAddress"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-bold my-2">Iroda email címe*</p>
                    <Input
                      variant="white"
                      value={officeEmail}
                      onChange={(e) => setOfficeEmail(e.target.value)}
                      name="officeEmail"
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-bold my-2">Iroda telefonszáma*</p>
                    <Input
                      variant="white"
                      value={officePhone}
                      onChange={(e) => setOfficePhone(e.target.value)}
                      name="officePhone"
                    />
                  </div>
                  <div>
                    <p className="font-bold my-2">Cég neve*</p>
                    <Input
                      variant="white"
                      value={officeCompany}
                      onChange={(e) => setOfficeCompany(e.target.value)}
                      name="officeCompany"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <p className="font-bold my-2">Hálózat</p>
                    <Input
                      variant="white"
                      value={network}
                      onChange={(e) => setnetwork(e.target.value)}
                      name="network"
                    />
                  </div>
                </div>
                {isAdmin && (
                  <div>
                    <div className="my-4 h-4">
                      <button className="blue-button float-right">
                        {agency ? "Iroda módosítása" : "Iroda létrehozása"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full card !rounded-3xl my-8 p-6">
                <div className="flex !flex-row border-b-2 pb-4 mb-4 max-xl:hidden">
                  <div className="font-bold py-1 pr-2 my-1 w-2/12">Név</div>
                  <div className="font-bold py-1 pr-2 my-1 w-3/12">Email</div>
                  <div className="font-bold py-1 pr-2 my-1 w-2/12">
                    Jogosultság
                  </div>
                  <div className="font-bold py-1 pr-2 my-1 w-5/12">
                    {isAdmin ? "Műveletek" : "Ingatlanok"}
                  </div>
                </div>

                {members.map((member) => (
                  <MemberRow
                    key={member.id}
                    member={member}
                    handleRemoveMember={handleRemoveMember}
                    isAdmin={isAdmin}
                  />
                ))}
              </div>

              <div
                className="my-4"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Input
                  variant="white"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="Meghívott email címe"
                  style={{ width: "auto", flexGrow: 1, marginRight: "10px" }}
                />
                <button onClick={handleSendInvite} className="blue-button">
                  Meghívás
                </button>
              </div>

              {isAdmin && (
                <div className="pending-invitations">
                  <h3>
                    Meghívottak (jelenleg csak meglévő felhasználót tudsz
                    meghívni)
                  </h3>
                  <ul>
                    {pendingInvitations.map((invite) => (
                      <li key={invite.id}>{invite.email} (Várakozás)</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Jelenleg nincs ingatlan irodád regisztrálva, vagy még nem
                  csatlakoztál egy irodához sem.
                </p>
                <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                  Ha szeretnéd létrehozni saját ingatlan irodádat, kérjük,
                  látogasd meg az{" "}
                  <a
                    href="otthonzona.com/agency-register"
                    style={{ color: "#007BFF", textDecoration: "underline" }}
                  >
                    Ingatlan iroda regisztrációs
                  </a>{" "}
                  oldalt, vagy lépj kapcsolatba velünk az{" "}
                  <a
                    href="mailto:info@otthonzona.com"
                    style={{ color: "#007BFF", textDecoration: "underline" }}
                  >
                    info@otthonzona.com
                  </a>{" "}
                  e-mail címen.
                </p>
                <p style={{ fontSize: "16px" }}>
                  Amennyiben már rendelkezel ingatlan irodával, kérjük, fogadd
                  el az adminisztrátor által küldött meghívót. Ha nem kaptál
                  meghívót, kérjük, vedd fel a kapcsolatot az adminisztrátorral.
                </p>
              </div>
            </>
          )}
        </div>
      </form>
    </Layout>
  );
}

export default CreateAgency;
