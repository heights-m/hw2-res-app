import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navbar navbar-expand-md bg-dark m-4 navbar-dark">
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
          <div className="collapse flex justify-content-center navbar-collapse container-fluid align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex align-items-center">
                <li className="nav-item m-2">
                    <Link to="/facil-list" className="nav-link">Facility List</Link>
                </li>
                <li className="nav-item m-2">
                    <Link to="/reservation" className="nav-link">Reservation</Link>
                </li>
                <li className="nav-item dropdown m-2">
                    <a href="#" className="nav-link dropdown-toggle text-center" role="button" data-bs-toggle="dropdown">
                      User
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                          <Link to="/user-res-his" className="dropdown-item ">Reservation History</Link>
                      </li>
                      <li>
                          <Link to="/user-info" className="dropdown-item">My Information</Link>
                      </li>
                    </ul>
                </li>
            </ul>
          </div>
          <img src="/src/assets/user.png" alt="user icon" id="user_icon" className="me-3 d-none d-lg-inline d-xl-inline d-md-inline"/>
        </div>
      </nav>
  );
}

export default Navbar;
