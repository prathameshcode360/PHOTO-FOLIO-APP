import { useState } from "react";
import AddImageForm from "./AddImageForm";

function Images() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      <div className="form-container">
        {show ? <AddImageForm /> : null}
        <button onClick={handleShow}>{show ? "Cancel" : "Add Image"}</button>
      </div>
      <div className="Images">
        <h2>no images found in this album</h2>
      </div>
    </>
  );
}

export default Images;
