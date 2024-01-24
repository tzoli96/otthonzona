import React, { useRef, useState } from "react";
import { api } from "../../utils/request";
import toast from "react-hot-toast";

const FileUpload = ({ children, onUpload }) => {
  const inputRef = useRef();

  const handleFileChange = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      handleUpload(files[i]);
    }
  };

  const handleUpload = async (file) => {
    if (!file) {
      toast.error("Kérjük válassz egy fájlt");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(api + "/api/media/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Sikeres feltöltés", data);
        onUpload?.(data);
      } else {
        toast.error("Sikertelen feltöltés:", response.statusText);
      }
    } catch (error) {
      toast.error("Sikertelen feltöltés:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        ref={inputRef}
        className="hidden"
        multiple={true}
      />
      <div className="w-full" onClick={() => inputRef.current.click()}>
        {children}
      </div>
    </div>
  );
};

export default FileUpload;
