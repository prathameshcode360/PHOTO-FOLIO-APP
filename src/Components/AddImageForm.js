function AddImageForm() {
  return (
    <div className="add-image-form">
      <form>
        <input type="text" placeholder="Title" />
        <input type="url" placeholder="Image-Url" />
        <button type="submit">Add-Image</button>
      </form>
    </div>
  );
}

export default AddImageForm;
