import React from "react";
import { Link } from "react-router-dom";
const PublicNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            <i class="bi bi-currency-exchange fs-1 text-warning "></i>
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <Link to="/login" className="btn btn-success me-2">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </form>
          </div>
        </div>
      </nav>





    </>
  );
};

export default PublicNavbar;