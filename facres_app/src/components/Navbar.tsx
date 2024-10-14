import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark-subtle py-3">
        <div className="container-fluid">
          <a href="index.html" id="navbar-home">
            <img
              src="src/assets/home_24dp_E8EAED_FILL1_wght400_GRAD0_opsz24.svg"
              alt="home"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto ">
                <li className="nav-item">
                    <a href="#" className="nav-link">Facility List</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Facility List</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Facility List</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
