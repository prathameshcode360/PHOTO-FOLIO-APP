import { useState } from "react";
import CreateAlbumForm from "./CreateAlbumForm";
import AlbumCard from "./AlbumCard";

function Albums(props) {
  const { handleShowImages, createAlbum, albumName, setAlbumName, albumData } =
    props;
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <div className="form-container">
        {show ? (
          <CreateAlbumForm
            createAlbum={createAlbum}
            albumName={albumName}
            setAlbumName={setAlbumName}
          />
        ) : null}
        <button onClick={handleShow}>{show ? "Cancel" : "Add Album"}</button>
      </div>
      <div className="albums">
        {albumData.map((album, index) => (
          <AlbumCard
            key={index}
            albumName={album.name}
            showImages={handleShowImages}
          />
        ))}
      </div>
    </>
  );
}

export default Albums;
