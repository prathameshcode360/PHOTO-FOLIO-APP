function AddImageForm(props) {
  const { createImage, image, setImage } = props;
  return (
    <div className="add-image-form">
      <form onSubmit={createImage}>
        <input
          type="text"
          placeholder="Title"
          required
          value={image.title}
          onChange={(e) => setImage({ title: e.target.value, url: image.url })}
        />
        <input
          type="url"
          placeholder="Image-Url"
          required
          value={image.url}
          onChange={(e) =>
            setImage({ title: image.title, url: e.target.value })
          }
        />
        <button type="submit">Add-Image</button>
      </form>
    </div>
  );
}

export default AddImageForm;
