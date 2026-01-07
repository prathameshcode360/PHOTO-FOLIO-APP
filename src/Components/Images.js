import { useState } from "react";
import AddImageForm from "./AddImageForm";
import ImageCard from "./ImageCard";

function Images(props) {
  const {
    album,
    images,
    createImage,
    image,
    setImage,
    setShowImages,
    deleteImage,
    updateImage,
    resetUpdateState,
    updateId,
  } = props;

  const [show, setShow] = useState(false);

  const filteredImages = images.filter((img) => img.albumId === album.id);

  function handleBack() {
    setShowImages(false);
    resetUpdateState();
  }
  function handleUpdateImage(img) {
    updateImage(img);
    setShow(true);
  }

  function handleToggleForm() {
    if (show) {
      setShow(false);
      resetUpdateState();
    } else {
      setShow(true);
    }
  }

  const isUpdateMode = updateId !== null;

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
            isUpdateMode={isUpdateMode}
          />
        )}
        <button className="toggle-form-btn" onClick={handleToggleForm}>
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
              img={img}
              deleteImage={deleteImage}
              updateImage={handleUpdateImage}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Images;
