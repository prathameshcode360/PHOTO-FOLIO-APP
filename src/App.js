import { useEffect, useState } from "react";
import Albums from "./Components/Albums";
import Navbar from "./Components/Navbar";
import Images from "./Components/Images";
import { db } from "./Firebase/FirebaseInit";

import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  // ---------------- VIEW CONTROL ----------------
  const [showImages, setShowImages] = useState(false);

  // ---------------- DATA STATES ----------------
  const [albums, setAlbums] = useState([]);
  const [images, setImages] = useState([]);

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // ---------------- FORM STATES ----------------
  const [albumName, setAlbumName] = useState("");
  const [image, setImage] = useState({ title: "", url: "" });
  const [updateId, setUpdateId] = useState(null);

  // ---------------- FETCH ALBUMS ----------------
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "albums"), (snapshot) => {
      const albumData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlbums(albumData);
    });
    return () => unsub();
  }, []);

  // ---------------- FETCH IMAGES ----------------
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "images"), (snapshot) => {
      const imageData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImages(imageData);
    });
    return () => unsub();
  }, []);

  // ---------------- ALBUM FUNCTIONS ----------------
  function openAlbum(album) {
    setSelectedAlbum(album);
    setShowImages(true);
  }

  async function createAlbum(e) {
    e.preventDefault();
    await addDoc(collection(db, "albums"), { name: albumName });
    setAlbumName("");
  }

  // ---------------- IMAGE FUNCTIONS ----------------
  async function createImage(e) {
    e.preventDefault();

    if (!selectedAlbum) {
      alert("Please select an album first");
      return;
    }

    if (updateId !== null) {
      await updateDoc(doc(db, "images", updateId), {
        title: image.title,
        url: image.url,
      });
      setUpdateId(null);
      setImage({ title: "", url: "" });
    } else {
      await addDoc(collection(db, "images"), {
        title: image.title,
        url: image.url,
        albumId: selectedAlbum.id, // now guaranteed
      });
      setImage({ title: "", url: "" });
    }
  }

  async function deleteImage(id) {
    await deleteDoc(doc(db, "images", id));
  }

  function updateImage(img) {
    setImage({ title: img.title, url: img.url });
    setUpdateId(img.id);
  }

  function resetUpdateState() {
    setUpdateId(null);
    setImage({ title: "", url: "" });
  }

  // ---------------- UI ----------------
  return (
    <div className="App">
      <Navbar />

      {showImages ? (
        <Images
          album={selectedAlbum}
          images={images}
          createImage={createImage}
          image={image}
          setImage={setImage}
          setShowImages={setShowImages}
          deleteImage={deleteImage}
          updateImage={updateImage}
          resetUpdateState={resetUpdateState}
          updateId={updateId}
        />
      ) : (
        <Albums
          albums={albums}
          albumName={albumName}
          setAlbumName={setAlbumName}
          createAlbum={createAlbum}
          openAlbum={openAlbum}
        />
      )}
    </div>
  );
}

export default App;
