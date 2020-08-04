import React from "react";
import { Link, useHistory } from "react-router-dom";
//importo firebase
import * as firebase from "firebase";

export default function Navbar() {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/home">
        <img
          src={`${process.env.PUBLIC_URL}/img/kaleidolab.jpg`}
          alt=""
          width="120"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              Calificacion de usuario <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/rate">
              Calificar video <span className="sr-only">(current)</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              to="/"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </Link>
          </li> */}
        </ul>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle my-2 my-lg-0"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {localStorage.getItem("email")}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link
              className="dropdown-item"
              onClick={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(function () {
                    // Sign-out successful.
                    history.push("/");
                  })
                  .catch(function (error) {
                    // An error happened.
                  });
              }}
            >
              Cerrar sesion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
