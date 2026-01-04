import { useState } from "react";
import Albums from "./Components/Albums";
import Navbar from "./Components/Navbar";
import Images from "./Components/Images";

function App() {
  const [showImages, setShowImages] = useState(false);
  function handleNavReload() {
    window.location.reload();
  }
  function handleShowImages() {
    setShowImages(!showImages);
  }

  return (
    <div className="App">
      <Navbar handleNavReload={handleNavReload} />
      {showImages ? <Images /> : <Albums handleShowImages={handleShowImages} />}
    </div>
  );
}

export default App;
