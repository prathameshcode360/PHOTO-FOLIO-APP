function ImageCard(props) {
  const { img, deleteImage, updateImage } = props;

  return (
    <div className="image-card">
      <div className="image">
        <h3>{img.title}</h3>
        <img src={img.url} alt={img.title} />
      </div>

      <div className="actions">
        <img
          onClick={() => deleteImage(img.id)}
          src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"
          alt="delete"
        />
        <img
          onClick={() => updateImage(img)}
          src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"
          alt="update"
        />
      </div>
    </div>
  );
}

export default ImageCard;
