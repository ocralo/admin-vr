import React, { useState, useEffect } from "react";

//import modal
import ModalNotes from "../ModalNotes/ModalNotes";

export default function UserTab({ UsersData, questions }) {
  const [UserData, setUserData] = useState({
    lastName: "",
    name: "",
    answers: [{ rating: 0, option: "" }],
  });

  const changeUser = (user) => {
    //console.log(user);
    setUserData(user);
  };

  useEffect(() => {
    console.log("hola");
  }, [UserData]);
  const rating = (jsonFirebase) => {
    return Object.values(jsonFirebase)
      .map((value) => value)
      .map((value) => value.rating)
      .reduce((accumulator, currentValue, indice, vector) => {
        let auxCurrentValue = 0;
        currentValue ? (auxCurrentValue = currentValue) : (auxCurrentValue = 0);
        return accumulator + auxCurrentValue;
      });
  };
  return (
    <>
      <ModalNotes userData={UserData} questions={questions}></ModalNotes>
      <div className="table-responsive-lg">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Calificacion</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(UsersData).map((value, i) => {
              return (
                <tr key={"tr-" + i}>
                  <th scope="row">{i + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.lastName}</td>
                  <td>{rating(value.answers)}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => {
                        console.log(value);
                        changeUser(value);
                      }}
                    >
                      Ver mas
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
