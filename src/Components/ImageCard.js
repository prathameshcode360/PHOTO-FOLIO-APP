function ImageCard({ title, url }) {
  return (
    <div className="image-card">
      <h3>{title}</h3>
      <img src={url} alt={title} />
      <div className="actions">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
          alt="delete"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
          alt="update"
        />
      </div>
    </div>
  );
}

export default ImageCard;
