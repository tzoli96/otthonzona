import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "../../utils/request";
import PostAd from "../PostAd";
import { toast } from "react-hot-toast";

function EditDraft() {
  const { id } = useParams();
  const [property, setProperty] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      request(`/api/draft_property/${id}`)
        .then((data) => {
          setProperty(data.data);
          setLoading(false);
        })
        .catch((err) => {
          toast.error("Hiba");
          setLoading(false);
        });
    }
  }, [id]);

  if (property) return <PostAd prefill={property} isDraft="true" />;
}

export default EditDraft;
