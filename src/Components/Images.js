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
    updateImage,
    resetUpdateState,
  } = props;

  const [show, setShow] = useState(false);

  const filteredImages = images.filter((img) => img.albumIndex === albumIndex);

  function handleBack() {
    setShowImages(false);
    resetUpdateState();
  }
  function hanleUpdateImage(id) {
    updateImage(id);
    setShow(true);
  }

  return (
    <>
      <div className="back-button">
        <button onClick={handleBack}>Back</button>
      </div>

      <div className="album-title">
        <h2>{album.name}</h2>
      </div>

      <div className="form-container">
        {show && (
          <AddImageForm
            createImage={createImage}
            image={image}
            setImage={setImage}
          />
        )}
        <button className="toggle-form-btn" onClick={() => setShow(!show)}>
          {show ? "Cancel" : "Add Image"}
        </button>
      </div>

      <div className="Images">
        {filteredImages.length === 0 ? (
          <h3>No images found</h3>
        ) : (
          filteredImages.map((img) => (
            <ImageCard
              key={img.id}
              id={img.id}
              title={img.title}
              url={img.url}
              deleteImage={deleteImage}
              updateImage={hanleUpdateImage}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Images;
