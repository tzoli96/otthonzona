import React, { useState } from "react";
import chevronLeft from "../../pictures/app/chevron-left.svg";
import whiteLogo from "../../icons/white-logo.svg";
import placeHolder from "../../pictures/property_placeholder.png";

function Gallery({ closeModal, images, property, setShowModal, currentImageIndex, setCurrentImageIndex, }) {
  const [mainImage, setMainImage] = useState(property.photos[currentImageIndex] || placeHolder);

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
      className="fixed inset-0 bg-black bg-opacity-90 z-40 w-screen"
      onClick={closeModal}
    >
      <div className="pt-6 px-6">
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
      </div>
      <div
        className="w-screen overflow-hidden grid grid-cols-12 md:grid-cols-9 h-[90%] px-0 pb-12"
      >
        <div className="flex my-auto justify-end mr-3 col-span-2 md:!col-span-1">
        <button
          className="p-2 text-white z-10 bg-white rounded"
          onClick={(e) => {
            prevImage();
            e.stopPropagation();
          }}
        >
          <img src={chevronLeft} style={{ width: 28, height: 28 }} />
        </button>
        </div>
        <div className="col-span-8 md:!col-span-7 m-auto h-full w-full overflow-hidden bg-slate-900 bg-opacity-20 flex justify-center items-center relative">
          <img
            src={mainImage || placeHolder}
            className="max-w-full max-h-full"
            alt="Modal Main"
          />
          <div className="absolute bottom-0 right-0 rounded-lg bg-white text-sm font-bold text-gray-600 px-4 py-2 shadow">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
        <div className="my-auto ml-3 col-span-2 md:!col-span-1">
        <button
          className="p-2 text-white z-10 bg-white rounded" // Added z-10 to bring above background
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
      </div>
    </div>
  );
}

export default Gallery;
