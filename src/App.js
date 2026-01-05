import { useState } from "react";
import Albums from "./Components/Albums";
import Navbar from "./Components/Navbar";
import Images from "./Components/Images";

function App() {
  const [showImages, setShowImages] = useState(false);

  // albums
  const [albums, setAlbums] = useState([]);

  // images (with stable id)
  const [images, setImages] = useState([]);

  // selected album index
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);

  // form states
  const [albumName, setAlbumName] = useState("");
  const [image, setImage] = useState({ title: "", url: "" });

  //Set updated index
  const [updateIndex, setUpdateIndex] = useState(null);

  function openAlbum(index) {
    setSelectedAlbumIndex(index);
    setShowImages(true);
  }

  function createAlbum(e) {
    e.preventDefault();
    setAlbums([...albums, { name: albumName }]);
    setAlbumName("");
  }

  function createImage(e) {
    e.preventDefault();
    if (updateIndex !== null) {
      setImages(
        images.map((img) =>
          img.id === updateIndex
            ? {
                ...img,
                title: image.title,
                url: image.url,
              }
            : img
        )
      );
      setUpdateIndex(null);
      setImage({ title: "", url: "" });
    } else {
      setImages([
        {
          id: Date.now(), // ✅ stable id
          title: image.title,
          url: image.url,
          albumIndex: selectedAlbumIndex,
        },
        ...images,
      ]);
      setImage({ title: "", url: "" });
    }
  }

  function deleteImage(id) {
    setImages(images.filter((img) => img.id !== id)); // ✅ delete by id
  }

  function updateImage(id) {
    const imageToUpdate = images.find((img) => img.id === id);
    setImage({ title: imageToUpdate.title, url: imageToUpdate.url });
    setUpdateIndex(id);
  }

  //reset update states
  function resetUpdateState() {
    setUpdateIndex(null);
    setImage({ title: "", url: "" });
  }

  return (
    <div className="App">
      <Navbar />
      {showImages ? (
        <Images
          album={albums[selectedAlbumIndex]}
          albumIndex={selectedAlbumIndex}
          images={images}
          createImage={createImage}
          image={image}
          setImage={setImage}
          setShowImages={setShowImages}
          deleteImage={deleteImage}
          updateImage={updateImage}
          resetUpdateState={resetUpdateState}
        />
      ) : (
        <Albums
          albums={albums}
          albumName={albumName}
          setAlbumName={setAlbumName}
          createAlbum={createAlbum}
          openAlbum={openAlbum}
        />
      )}
    </div>
  );
}

export default App;
