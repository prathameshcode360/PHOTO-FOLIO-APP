import { useState } from "react";
import Albums from "./Components/Albums";
import Navbar from "./Components/Navbar";
import Images from "./Components/Images";

function App() {
  const [showImages, setShowImages] = useState(false);

  // albums (index based)
  const [albums, setAlbums] = useState([]);

  // images (index based album reference)
  const [images, setImages] = useState([]);

  // selected album index
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);

  // form states
  const [albumName, setAlbumName] = useState("");
  const [image, setImage] = useState({ title: "", url: "" });

  function handleNavReload() {
    window.location.reload();
  }

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
    setImages([
      {
        title: image.title,
        url: image.url,
        albumIndex: selectedAlbumIndex,
      },
      ...images,
    ]);
    setImage({ title: "", url: "" });
  }

  function deleteImage(imageIndex) {
    setImages(images.filter((_, i) => i !== imageIndex));
  }

  return (
    <div className="App">
      <Navbar handleNavReload={handleNavReload} />

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
