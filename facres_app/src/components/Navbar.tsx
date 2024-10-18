import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark py-3 m-4 navbar-dark">
        <div className="container-fluid">
          <a href="index.html" id="navbar-home" >
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>
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
          <div className="collapse flex justify-content-center navbar-collapse container-fluid align-items-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav- text-light">Facility List</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav- text-light">Reservation</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav- text-light">Facility List</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
