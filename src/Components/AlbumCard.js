function AlbumCard({ albumName, showImages }) {
  return (
    <>
      <div onClick={showImages} className="album-card">
        <div className="delete-album">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
            alt="delete-album"
          />
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/833/833281.png"
          alt="album-logo"
        />
        <div className="album-name">{albumName}</div>
      </div>
    </>
  );
}

export default AlbumCard;
