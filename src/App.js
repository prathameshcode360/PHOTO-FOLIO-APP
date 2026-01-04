import Navbar from "./Components/Navbar";

function App() {
  function handleNavReload() {
    window.location.reload();
  }

  return (
    <div className="App">
      <Navbar handleNavReload={handleNavReload} />
    </div>
  );
}

export default App;
