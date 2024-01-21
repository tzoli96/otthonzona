import React, { useState } from "react";
import ExpandableCard from "../Elements/ExpandableCard";
import icon from "../../pictures/app/upload-photo.png";
import uploadIcon from "../../pictures/app/upload-grey.svg";
import UploadComponent from "../Elements/UploadComponent";
import { FaCheckCircle } from "react-icons/fa";
import FileUpload from "../Elements/NewUpload";

const UploadButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="orange-button">
      Tallózás
    </button>
  );
};

function UploadImages({ prefill }) {
  const [images, setImages] = useState(
    prefill?.photos?.map((url) => ({ url })) || []
  );
  const urls = images.map((image) => image.url).join(",");

  return (
    <ExpandableCard
      Component={({ isExpanded, setIsExpanded }) => {
        const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
        return (
          <div className="w-full my-8 p-6">
            <input type="hidden" name="photos" value={urls} />
            <div className="w-full lg:grid grid-cols-2">
              <div className="flex gap-4 items-center">
                <img src={icon} className="h-6 w-6" />
                <span className="text-xl font-bold mt-0">
                  Fotók/videók feltöltése
                </span>
              </div>
              <div>
                {!isExpanded && (
                  <div className="flex items-center justify-end mt-3">
                    {hasBeenExpanded && (
                      <FaCheckCircle
                        color="#5ac71f"
                        className="mr-4"
                        size="2em"
                      />
                    )}{" "}
                    <button
                      type="button"
                      className="orange-button"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {hasBeenExpanded ? "Módosítás" : "Beállítás"}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div
              className="py-6"
              style={{ display: isExpanded ? "block" : "none" }}
            >
              <div className="lg:grid grid-cols-2 gap-2">
                <div className="w-full h-96 flex justify-center items-center flex-col gap-8">
                  <img src={uploadIcon} className="h-20 w-20" />
                  <p className="font-bold">Töltsd fel a fényképeid</p>
                  <FileUpload
                    onUpload={(image) => {
                      images.push({ url: image.location });
                      setImages([...images]);
                    }}
                  >
                    <UploadButton />
                  </FileUpload>
                </div>
                <div>
                  {images.map((image, index) => (
                    <div
                      className="w-full grid gap-8 my-8"
                      style={{ gridTemplateColumns: "150px 1fr" }}
                    >
                      <div>
                        <img src={image.url} className="h-32 w-32 object-contain object-left rounded-lg" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">
                          {image.original_filename}
                          <span
                            className="float-right cursor-pointer"
                            onClick={() => {
                              setImages(images.filter((_, i) => i !== index));
                            }}
                          >
                            ✕
                          </span>
                        </p>
                        {image.bytes && (
                          <p className="font-medium text-gray-500">
                            {parseInt(image.bytes / 1000)} kb
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-12 h-1">
                <span className="float-right">
                  <button
                    type="button"
                    className="blue-button !w-[150px]"
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                      setHasBeenExpanded(true);
                    }}
                  >
                    Mentés
                  </button>
                </span>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

export default UploadImages;
