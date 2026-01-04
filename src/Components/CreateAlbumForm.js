function CreateAlbumForm(props) {
  const { createAlbum, albumName, setAlbumName } = props;
  return (
    <div className="create-album-form">
      <h2>Create An Album</h2>
      <form onSubmit={createAlbum}>
        <input
          type="text"
          placeholder="album name"
          required
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateAlbumForm;
