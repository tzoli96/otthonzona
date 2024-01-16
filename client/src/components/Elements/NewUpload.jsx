import React, { useRef, useState } from "react";
import { api } from "../../utils/request";

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
      console.error("Please select a file");
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
        console.log("File uploaded successfully", data);
        onUpload?.(data);
      } else {
        console.error("Error uploading file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
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
