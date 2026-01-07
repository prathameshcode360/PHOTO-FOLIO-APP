function AlbumCard({ albumName, album, openAlbum }) {
  return (
    <div className="album-card" onClick={() => openAlbum(album)}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/833/833281.png"
        alt="album"
      />
      <div className="album-name">{albumName}</div>
    </div>
  );
}

export default AlbumCard;
