import React, { useState, useEffect } from "react";
import Layout from "../Elements/AppLayout";
import Input from "../Elements/Input";
import { toast } from "react-hot-toast";
import { request } from "../../utils/request";

function CreateAgency() {
  const [agency, setAgency] = useState(null);
  const [officeName, setOfficeName] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [officeEmail, setOfficeEmail] = useState("");
  const [officePhone, setOfficePhone] = useState("");

  const [inviteEmail, setInviteEmail] = useState("");
  const [members, setMembers] = useState([]);
  const [pendingInvitations, setPendingInvitations] = useState([]);

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
          fetchMembers(response.data.id);
        }
      } catch (error) {
        console.error("Error fetching agency data:", error);
        // Handle error appropriately
      }
    }

    fetchAgencyData();
  }, []);

  async function fetchMembers(agencyId) {
    try {
      const membersResponse = await request(`/api/agency/${agencyId}/members`, {
        method: "GET",
      });
      if (membersResponse.data) {
        setMembers(membersResponse.data.members); // Update members state
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
        agency
          ? "Agency modified successfully!"
          : "Agency created successfully!"
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
        toast.success("Invitation sent successfully");
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
        toast.success("Member removed successfully");
      }
    } catch (error) {
      console.error("Error removing member:", error);
      toast.error("Error removing member");
    }
  };

  return (
    <Layout selected={6}>
      <form onSubmit={handleSubmit}>
        <div className="p-8">
          <p className="card-heading my-4">Ingatlan iroda létrehozása</p>
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
            </div>
            <div className="my-4 h-4">
              <button className="blue-button float-right">
                {agency ? "Iroda módosítása" : "Iroda létrehozása"}
              </button>
            </div>
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

          <table>
            <thead>
              <tr>
                <th>Név</th>
                <th>Email</th>
                <th>Jogosultság</th>
                <th>Törlés</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                  <td>
                    {member.role !== "Admin" && (
                      <button onClick={() => handleRemoveMember(member.id)}>
                        Törlés
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pending-invitations">
            <h3>Meghívottak</h3>
            <ul>
              {pendingInvitations.map((invite) => (
                <li key={invite.id}>
                  {invite.email} (Várakozás)
                  {/* You can add a cancel invitation button if needed */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default CreateAgency;
