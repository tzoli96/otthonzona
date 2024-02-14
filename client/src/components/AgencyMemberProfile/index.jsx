import React, { useContext, useEffect, useState } from "react";
import Layout from "../Elements/AppLayout";
import Input from "../Elements/Input";
import { AppContext } from "../../App";
import Loading from "../Elements/Loading";
import { toast } from "react-hot-toast";
import { request } from "../../utils/request";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import TagButton from "./TagButton";
import AppSelect from "../Elements/AppSelect";

export const profilePhotoPlaceholder =
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

function MemberProfile() {
  const { user } = useContext(AppContext);
  const [member, setMember] = useState(null);
  const [attributes, setAttributes] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedState, setCheckedState] = useState([]);

  const handleTagOnChange = (tagId) => {
    if (checkedState.includes(tagId)) {
      setCheckedState(checkedState.filter((id) => id !== tagId));
    } else {
      setCheckedState([...checkedState, tagId]);
    }
  };

  const [introduction, setIntroduction] = useState("");

  useEffect(() => {
    request("/api/agency/member")
      .then((response) => {
        setLoading(false);
        setMember(response.data);
        setIntroduction(response.data.introduction);
        setCheckedState(response.data.tagIds);
      })
      .catch((error) => {
        console.error("Error fetching member data:", error);
        setLoading(false);
      });

    request("/api/agency/tags")
      .then((response) => {
        setLoading(false);
        setTags(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tags data:", error);
        setLoading(false);
      });

    request("/api/agency/attributes")
      .then((response) => {
        setLoading(false);
        setAttributes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching attributes data:", error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const form = new FormData(e.target);
      const values = Object.fromEntries(form.entries());

      const areaTags = form.getAll("areaTags");
      const skillTags = form.getAll("skillTags");
      values.tags = [...areaTags, ...skillTags];

      const attributes = [];
      for (const [key, value] of form.entries()) {
        if (key.startsWith("attribute_")) {
          const newKey = key.substring("attribute_".length);
          attributes.push({ id: newKey, value });
        }
      }
      values.attributes = attributes;

      const body = JSON.stringify(values);

      await request(`/api/agency/${member.id}`, {
        method: "PUT",
        body,
      })
        .then((response) => {
          setMember(response.data);
          toast.success("Sikeres mentés!");
        })
        .catch((error) => {
          toast.error("Hiba történt az adatok olvasásakor.");
          console.error("Error fetching member data:", error);
        });
    } catch (err) {
      setLoading(false);
      toast.error("Unknown error");
      console.error("Unknown error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getAttributeValue = (attributeId) => {
    if (member) {
      const attribute = member.attributes?.find(
        (attr) => attr.attributeId === attributeId
      );

      return attribute ? attribute.value : "";
    }

    return "";
  };

  return (
    <Layout selected={9}>
      {loading ? (
        <div className="flex justify-center h-48 items-center my-8 gap-4 font-medium text-gray-900">
          <Loading />
          <span>Az adatok betöltése folyamatban van</span>
        </div>
      ) : user?.isAgent ? (
        <form onSubmit={handleSubmit}>
          <div className="p-8">
            <p className="card-heading my-4">Ingatlanos Profil</p>
            <div className="card p-8 !rounded-2xl my-4">
              <div className="flex items-center py-8">
                <div className="w-48 h-48 rounded-full overflow-hidden edit-profile-image-responsivity mr-5">
                  <img
                    src={user?.photo || profilePhotoPlaceholder}
                    className="min-full h-w-full"
                  />
                </div>
                <Link to="/profile">
                  <button
                    type="button"
                    style={{ width: 200 }}
                    className="orange-button"
                  >
                    Profilkép frissítése
                  </button>
                </Link>
              </div>

              <div className="py-6">
                {attributes ? (
                  <div className="sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {attributes.map((attribute) => (
                      <div className="my-4 sm:my-2 w-full mr-2">
                        <p className="font-bold">{attribute.label}</p>
                        <Input
                          name={`attribute_${attribute.id}`}
                          variant="white"
                          type="text"
                          defaultValue={getAttributeValue(attribute.id)}
                          onWheel={(e) => e.target.blur()}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}

                <div className="my-4 lg:my-2">
                  <p className="font-bold">Bemutatkozás</p>
                  <input
                    type="hidden"
                    name="introduction"
                    value={introduction}
                  />
                  <div className="mb-20 md:mb-16">
                    <ReactQuill
                      theme="snow"
                      value={introduction}
                      onChange={setIntroduction}
                      style={{
                        height: 400,
                      }}
                    />
                  </div>
                </div>

                <div className="my-8">
                  <p className="font-bold">Értékesítési területeim</p>

                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                    <div className="xl:col-span-5 2xl:col-span-3">
                      <AppSelect
                        options={[]}
                        placeholder={"Kezdj egy gépelni..."}
                        onChange={(option) => {
                          if (option) {
                            handleTagOnChange(option.value);
                          }
                        }}
                        loadOptions={async (inputValue, callback) => {
                          let response;

                          try {
                            response = await request(
                              "/api/agency/area-tags?q=" + inputValue
                            );
                          } catch (e) {
                            response = [];
                          }

                          callback(response);
                        }}
                        isAsync
                        name="settlement"
                      />
                    </div>

                    <div className="xl:col-span-7 2xl:col-span-9">
                      <div className="flex !flex-row flex-wrap gap-2">
                        {tags.areaTags?.map((tag) =>
                          checkedState.includes(tag.id) ? (
                            <TagButton
                              tag={tag}
                              checkedState={checkedState}
                              handleTagOnChange={handleTagOnChange}
                              closeBtn={true}
                            />
                          ) : (
                            ""
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <p className="font-bold">Amiben tudok segíteni</p>

                  <div className="flex !flex-row flex-wrap gap-2">
                    {tags.skillTags?.map((tag) => (
                      <TagButton
                        tag={tag}
                        checkedState={checkedState}
                        handleTagOnChange={handleTagOnChange}
                        closeBtn={false}
                      />
                    ))}
                  </div>
                </div>

                  <div className="responsive-flex gap-4 justify-center my-12 sm:justify-end">
                      <a
                        href={`/agent/${member?.id}`}
                        target="_blank"
                        className="blue-button min-w-[150px] text-center"
                      >
                        Profilom megtekintése
                      </a>
                      <button 
                      style={{width: 150}}
                      className="blue-button min-w-[150px]"
                      >
                        {loading ? <Loading /> : "Mentés"}
                      </button>
                  </div>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Layout />
      )}
    </Layout>
  );
}

export default MemberProfile;
