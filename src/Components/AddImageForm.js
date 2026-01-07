function AddImageForm(props) {
  const { createImage, image, setImage, isUpdateMode } = props;

  function clearInputs() {
    setImage({ title: "", url: "" });
  }

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
        <button className="clear-inputs" onClick={clearInputs}>
          Clear
        </button>
        <button className="submit" type="submit">
          {isUpdateMode ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default AddImageForm;
