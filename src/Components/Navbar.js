function Navbar({ handleNavReload }) {
  return (
    <div className="navbar" onClick={handleNavReload}>
      <div className="right-nav">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3979/3979453.png"
          alt="nav-logo"
        />
        <h3>PhotoFolio</h3>
      </div>
    </div>
  );
}

export default Navbar;
