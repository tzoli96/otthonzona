import React, { useState, useEffect } from "react";
import chevronLeft from "../../pictures/app/chevron-left.svg";
import Gallery from "./Gallery";
import placeHolder from "../../pictures/property_placeholder.png";

function Photos({ property }) {
  const [mainImage, setMainImage] = useState(property.photos[0] || placeHolder);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = property.photos;

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

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentImageIndex]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      <div
        className="md:w-full rounded-lg overflow-hidden h-[40vh] md:h-[50vh] bg-slate-900 bg-opacity-20 flex justify-center items-center relative"
        onClick={() => setShowModal(true)}
      >
        <div className="absolute h-full w-10 left-0 top-0 flex justify-center items-center">
          <span
            onClick={(e) => {
              e.stopPropagation();
              if (currentImageIndex > 0) {
                setCurrentImageIndex(currentImageIndex - 1);
                setMainImage(images[currentImageIndex - 1]);
              }
            }}
          >
            <img
              src={chevronLeft}
              style={{ width: 32, height: 32 }}
              className="cursor-pointer"
            />
          </span>
        </div>
        <div className="absolute h-full w-10 right-0 top-0 flex justify-center items-center">
          <span
            onClick={(e) => {
              e.stopPropagation();
              if (currentImageIndex < images.length - 1) {
                setCurrentImageIndex(currentImageIndex + 1);
                setMainImage(images[currentImageIndex + 1]);
              }
            }}
          >
            <img
              src={chevronLeft}
              style={{ width: 32, height: 32 }}
              className="cursor-pointer rotate-180"
            />
          </span>
        </div>
        <img src={mainImage} className="max-w-full max-h-full" alt="Main" />
        <div className="absolute bottom-4 right-4 bg-gray-100 rounded-lg p-2 text-sm font-semibold text-gray-600">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
      {false && (
        <div className="w-full whitespace-nowrap" style={{ overflowX: "auto" }}>
          <div
            className={`block whitespace-nowrap mt-4 gap-4 justify-between w-[${
              250 * images.length
            }px] overflow-auto`}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  background: `url(${image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="mx-4 inline-block w-[250px] h-[250px] rounded-lg cursor-pointer"
                alt={`Thumbnail ${index}`}
                onClick={() => changeMainImage(image, index)}
              />
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <Gallery
          closeModal={closeModal}
          images={images}
          property={property}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default Photos;
