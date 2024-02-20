import { useEffect, useState } from "react";
import chevronLeft from "../../pictures/app/chevron-left.svg";
import placeHolder from "../../pictures/property_placeholder.png";
import Gallery from "./Gallery";

function Photos({ property }) {
  const [mainImage, setMainImage] = useState(property.photos[0] || placeHolder);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [highlightedThumbIndex, setHighlightedThumbIndex] = useState(0);

  const images = property.photos;

  const startIndex = Math.floor(currentImageIndex / 3) * 3;
  const shownThumbNails = [0, 1, 2].map(
    (offset) => (startIndex + offset) % images.length
  );

  const updateThumbnailAndImage = (index) => {
    const newIndex = index % images.length;
    const newThumbIndex = newIndex % 3;
    setMainImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
    setHighlightedThumbIndex(newThumbIndex);
  };

  const changeMainImage = (newImage, index) => {
    setMainImage(newImage);
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    const newIndex = currentImageIndex + 1;
    updateThumbnailAndImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = currentImageIndex - 1 + images.length;
    updateThumbnailAndImage(newIndex % images.length);
  };

  const closeModal = () => {
    setShowModal(false);
    changeMainImage(images[currentImageIndex], currentImageIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
        <div className="absolute h-full left-0 top-0 flex justify-center items-center">
          <span
            onClick={(e) => {
              prevImage();
              e.stopPropagation();
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
              nextImage();
              e.stopPropagation();
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

      <div className={"grid gap-3 md:gap-5 mt-3 " + 
            (images.length === 2
              ? "grid-cols-2 " 
              : "grid-cols-3 ") + 
              (images.length < 2
              ? "hidden"
              : "")}>
        {[0, 1, 2].map((offset) => {
          const indexToShow = (startIndex + offset) % images.length;
          return (
            <div
              key={indexToShow}
              onClick={(e) => {
                e.stopPropagation();
                updateThumbnailAndImage(indexToShow);
              }}
              className={
                "rounded-xl overflow-hidden flex items-center w-full xs-vh h-[12vh] sm:h-[15vh] md:h-[20vh] lg:h-[15vh] xl:h-[20vh] bg-slate-900 bg-opacity-20 " +
                (offset === highlightedThumbIndex
                  ? "border-4 border-spacing-1 thumbnail-border"
                  : "")
              }
            >
              <img
                src={images[indexToShow]}
                className="w-full h-auto cursor-pointer flex items-center"
                alt={`Thumbnail ${indexToShow}`}
              />
            </div>
          );
        })}
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
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
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
