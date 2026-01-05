import { useState } from "react";
import CreateAlbumForm from "./CreateAlbumForm";
import AlbumCard from "./AlbumCard";

function Albums(props) {
  const { albums, albumName, setAlbumName, createAlbum, openAlbum } = props;
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <div className="form-container">
        {show && (
          <CreateAlbumForm
            createAlbum={createAlbum}
            albumName={albumName}
            setAlbumName={setAlbumName}
          />
        )}
        <button className="toggle-form-btn" onClick={handleShow}>
          {show ? "Cancel" : "Add Album"}
        </button>
      </div>
      <div className="albums">
        {albums.length === 0 ? (
          <h3>No albums added </h3>
        ) : (
          albums.map((album, index) => (
            <AlbumCard
              key={index}
              albumName={album.name}
              index={index}
              openAlbum={openAlbum}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Albums;
