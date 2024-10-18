import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-md bg-dark py-3 m-4 navbar-dark">
        <div className="container-fluid">
          <a href="index.html" id="navbar-home" className="ms-3">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>
            </Link>
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
                    <Link to="/facil-list" className="nav-link">Facility List</Link>
                </li>
                <li className="nav-item">
                    <Link to="/reservation" className="nav-link">Reservation</Link>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                      User
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                          <Link to="/user-res-his" className="dropdown-item">Reservation History</Link>
                      </li>
                      <li>
                          <Link to="/user-info" className="dropdown-item">My Information</Link>
                      </li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
