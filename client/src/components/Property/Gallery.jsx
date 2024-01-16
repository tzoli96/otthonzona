import React, { useState } from "react";
import chevronLeft from "../../pictures/app/chevron-left.svg";
import whiteLogo from "../../icons/white-logo.svg";
import placeHolder from "../../pictures/property_placeholder.png";

function Gallery({ closeModal, images, property, setShowModal }) {
  const [mainImage, setMainImage] = useState(property.photos[0] || placeHolder);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeMainImage = (newImage, index) => {
    setMainImage(newImage);
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    let newIndex = (currentImageIndex + 1) % images.length;
    changeMainImage(images[newIndex], newIndex);
  };

  const prevImage = () => {
    let newIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeMainImage(images[newIndex], newIndex);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-40 w-screen p-6"
      onClick={closeModal}
    >
      <div
        className="text-white grid gap-4"
        style={{ gridTemplateColumns: "80px 1fr" }}
      >
        <div>
          <img src={whiteLogo} className="h-full opacity-75" />
        </div>
        <div>
          <span className="text-xl font-bold">
            {property.street}{" "}
            {property?.exactPosition &&
              property?.houseNo &&
              ` ${property.houseNo}`}
          </span>
          <p>
            {property.settlement} {property.district}
          </p>
        </div>
      </div>
      {
        <button
          className="absolute top-4 right-4 p-4 text-white text-2xl"
          onClick={() => setShowModal(false)}
        >
          ✕
        </button>
      }
      <div
        className="h-4/5 w-screen overflow-hidden"
        style={{ height: "calc(80% - 40px)" }}
      >
        <button
          className="absolute top-[40%] left-4 p-2 text-white z-10 bg-white rounded"
          onClick={(e) => {
            prevImage();
            e.stopPropagation();
          }}
        >
          <img src={chevronLeft} style={{ width: 28, height: 28 }} />
        </button>
        <div className="relative mx-auto w-4/5 md:w-3/5 h-full flex justify-center items-center">
          <img
            src={mainImage || placeHolder}
            className="max-w-full max-h-full"
            alt="Modal Main"
          />
          <div className="absolute bottom-0 right-4 rounded-lg bg-white text-sm font-bold text-gray-600 px-4 py-2 shadow">
            {currentImageIndex + 1} of {images.length}
          </div>
        </div>
        <button
          className="absolute top-[40%] right-4 p-2 text-white z-10 bg-white rounded" // Added z-10 to bring above background
          onClick={(e) => {
            nextImage();
            e.stopPropagation();
          }} // Added stopPropagation
        >
          <img
            src={chevronLeft}
            style={{ width: 28, height: 28 }}
            className="rotate-180"
          />
        </button>
      </div>
      <div className="bottom-0 h-1/5 max-w-full overflow-x-auto flex justify-center gap-4 p-4">
        {images.map((image, index) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setMainImage(image);
              setCurrentImageIndex(index);
            }}
            className={
              "w-1/2 rounded-lg overflow-hidden " +
              (image === mainImage
                ? "border-2 border-spacing-1 border-white"
                : "")
            }
          >
            <div
              className={
                "overflow-hidden h-full rounded-lg border-4 border-transparent flex justify-center items-center"
              }
            >
              <img
                key={index}
                src={image}
                className="w-full h-auto cursor-pointer"
                alt={`Thumbnail ${index}`}
                onClick={() => changeMainImage(image, index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
