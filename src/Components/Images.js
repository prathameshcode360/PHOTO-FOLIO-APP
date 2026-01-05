import { useState } from "react";
import AddImageForm from "./AddImageForm";
import ImageCard from "./ImageCard";

function Images(props) {
  const {
    album,
    albumIndex,
    images,
    createImage,
    image,
    setImage,
    setShowImages,
    deleteImage,
  } = props;

  const [show, setShow] = useState(false);

  const filteredImages = images.filter((img) => img.albumIndex === albumIndex);

  function handleBack() {
    setShowImages(false);
  }

  return (
    <>
      <div className="back-button">
        <button onClick={handleBack}>Back</button>
      </div>

      <h2>{album.name}</h2>

      <div className="form-container">
        {show && (
          <AddImageForm
            createImage={createImage}
            image={image}
            setImage={setImage}
          />
        )}
        <button onClick={() => setShow(!show)}>
          {show ? "Cancel" : "Add Image"}
        </button>
      </div>

      <div className="Images">
        {filteredImages.length === 0 ? (
          <h3>No images found</h3>
        ) : (
          filteredImages.map((img, index) => (
            <ImageCard
              key={index}
              title={img.title}
              url={img.url}
              index={index}
              deleteImage={deleteImage}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Images;
