import { useState } from "react";
import CreateAlbumForm from "./CreateAlbumForm";
import AlbumCard from "./AlbumCard";

function Albums(props) {
  const { handleShowImages } = props;
  const [show, setShow] = useState(false);
  const [album, setAlbum] = useState({ name: "" });
  const [albumData, setAlbumData] = useState([]);

  function handleShow() {
    setShow(!show);
  }

  function createAlbum(e) {
    e.preventDefault();
    console.log(album);
    setAlbumData([{ name: album.name }, ...albumData]);
    console.log(albumData);
    setAlbum({ name: "" });
  }

  return (
    <>
      <div className="form-container">
        {show ? (
          <CreateAlbumForm
            createAlbum={createAlbum}
            album={album}
            setAlbum={setAlbum}
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
