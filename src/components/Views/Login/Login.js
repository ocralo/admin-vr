import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//importo firebase
import * as firebase from "firebase";

export default function Login() {
  const [User, setUser] = useState({ userName: "", password: "" });
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    login();
  }

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(User.userName, User.password)
      .then((resolve) => {
        /* console.log(resolve.user.email); */
        console.log(resolve.user.email);
        localStorage.setItem("email",resolve.user.email);
        history.push("/home");
      })
      .catch(function (error) {
        // Handle Errors here.
        alert("No se pudo iniciar sesion");
        // ...
      });
  };

  function handleChangeInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    inputName == "userName"
      ? setUser({ ...User, userName: inputValue })
      : setUser({ ...User, password: inputValue });
  }

  return (
    <div className="container-fluid vh-100">
      <div className="row justify-content-center h-100">
        <div className="col-md-6 d-flex align-items-center">
          <div className="card shadow w-100" style={{ height: "16em" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="usuario">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usuario"
                    aria-describedby="emailHelp"
                    name="userName"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="Password"
                    onChange={handleChangeInput}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-2"
                >
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
