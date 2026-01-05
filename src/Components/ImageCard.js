function ImageCard(props) {
  const { title, url, id, deleteImage, updateImage } = props;
  return (
    <div className="image-card">
      <div className="image">
        <h3>{title}</h3>
        <img src={url} alt={title} />
      </div>
      <div className="actions">
        <img
          onClick={() => deleteImage(id)}
          src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
          alt="delete"
        />
        <img
          onClick={() => updateImage(id)}
          src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
          alt="update"
        />
      </div>
    </div>
  );
}

export default ImageCard;
