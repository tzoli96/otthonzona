import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../utils/request";
import PostAd from "../components/PostAd";
import { toast } from "react-hot-toast";

function EditAd() {
  const { id } = useParams();
  const [property, setProperty] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      request(`/api/property/${id}`)
        .then((data) => {
          setProperty(data.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error("Hiba", err);
          setLoading(false);
        });
    }
  }, [id]);

  if (property)
    return (
      <PostAd prefill={property} />
    );
}

export default EditAd;
