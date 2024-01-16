import React, { useContext, useState } from "react";
import Layout from "../Elements/AppLayout";
import Input from "../Elements/Input";
import App, { AppContext } from "../../App";
import Loading from "../Elements/Loading";
import UploadComponent from "../Elements/UploadComponent";
import { toast } from "react-hot-toast";
import { request } from "../../utils/request";
import convertFormDataToJson from "../../utils/fd";

export const profilePhotoPlaceholder =
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

function Profile() {
  const data = useContext(AppContext);
  const { user, setData } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [newPhoto, setNewPhoto] = useState("");

  const [showRealEstateFields, setShowRealEstateFields] = useState(
    user?.isAgent || false
  );

  const toggleRealEstateFields = () => {
    setShowRealEstateFields(!showRealEstateFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = convertFormDataToJson(e.target);
      const body = JSON.stringify({
        ...formData,
        isAgent: showRealEstateFields, // Include the isAgent state
      });
      const res = await request("/api/user", {
        method: "PUT",
        body,
      });
      if (res.data) {
        setData({ ...data, user: res.data });
        setShowRealEstateFields(res.data.isAgent);
      }
    } catch (err) {
      setLoading(false);
      toast.error("Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout selected={4}>
      <form onSubmit={handleSubmit}>
        <div className="p-8">
          <p className="card-heading my-4">Profil Adatok</p>
          <div className="card p-8 !rounded-2xl my-4">
            <div className="flex gap-8 my-4">
              <input
                type="hidden"
                value={newPhoto || user?.photo}
                name="photo"
              />
              <div className="w-48 h-48 rounded-full overflow-hidden rounded-image-container">
                <img
                  src={newPhoto || user?.photo || profilePhotoPlaceholder}
                  className="min-full h-w-full"
                />
              </div>
              <div className="flex justify-center items-center p-8">
                <UploadComponent
                  maxFiles={1}
                  onUpload={({ url }) => setNewPhoto(url)}
                >
                  <button
                    type="button"
                    style={{ width: 200 }}
                    className="orange-button"
                  >
                    Profilkép frissítése
                  </button>
                </UploadComponent>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold my-2">Vezetéknév*</p>
                <Input
                  variant="white"
                  defaultValue={user?.lastName}
                  name="lastName"
                />
              </div>
              <div>
                <p className="font-bold my-2">Email*</p>
                <Input
                  variant="white"
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                />
              </div>
              <div>
                <p className="font-bold my-2">Keresztnév*</p>
                <Input
                  variant="white"
                  defaultValue={user?.firstName}
                  name="firstName"
                />
              </div>
              <div>
                <p className="font-bold my-2">Telefonszám*</p>
                <Input
                  variant="white"
                  defaultValue={user?.phone}
                  name="phone"
                />
              </div>
              {/*<div>
                <p className="font-bold my-2">új jelszó</p>
                <Input variant="white" name="currentPassword" type="password" />
              </div>*/}
              {/*<div>
                <p className="font-bold my-2">jelenlegi jelszó</p>
                <Input variant="white" name="newPassword" type="password" />
              </div>*/}
            </div>
            <div className="my-4 h-4">
              <button className="blue-button float-right">
                {loading ? <Loading /> : "Mentés"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Profile;
