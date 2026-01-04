import { useState } from "react";
import Albums from "./Components/Albums";
import Navbar from "./Components/Navbar";
import Images from "./Components/Images";

function App() {
  const [showImages, setShowImages] = useState(false);
  const [albumName, setAlbumName] = useState("");
  const [albumData, setAlbumData] = useState([{ name: "Test", images: [] }]);

  function handleNavReload() {
    window.location.reload();
  }
  function handleShowImages() {
    setShowImages(!showImages);
  }

  function createAlbum(e) {
    e.preventDefault();
    setAlbumData([
      {
        name: albumName,
        images: [],
      },
      ...albumData,
    ]);
    console.log(albumData);
    setAlbumName("");
  }

  function createImage(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <Navbar handleNavReload={handleNavReload} />
      {showImages ? (
        <Images />
      ) : (
        <Albums
          handleShowImages={handleShowImages}
          createAlbum={createAlbum}
          setAlbumName={setAlbumName}
          albumName={albumName}
          albumData={albumData}
        />
      )}
    </div>
  );
}

export default App;
