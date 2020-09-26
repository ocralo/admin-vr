import React, { useState } from "react";

//import modal
import ModalRateVideo from "../ModalRateVideo/ModalRateVideo";

export default function UserTabVideo({ UsersData, questions }) {
  const [UserData, setUserData] = useState({
    lastName: "",
    name: "",
    answers: [{ rating: 0, option: "" }],
  });

  const [numberQuestion, setNumberQuestion] = useState(0);

  const changeUser = (user, i) => {
    setUserData(user);
    setNumberQuestion(i);
  };
  const rating = (jsonFirebase) => {
    return Object.values(jsonFirebase)
      .map((value) => value)
      .map((value) => value.rating)
      .reduce((accumulator, currentValue) => {
        let auxCurrentValue = 0;
        currentValue ? (auxCurrentValue = currentValue) : (auxCurrentValue = 0);
        return accumulator + auxCurrentValue;
      });
  };
  return (
    <>
      <ModalRateVideo
        userData={UserData}
        numberQuestion={numberQuestion}
      ></ModalRateVideo>
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
                <tr key={`userRow${i}`}>
                  <th scope="row">{i + 1}</th>
                  <td>{value.name}</td>
                  <td>{value.lastName}</td>
                  <td>{rating(value.answers)}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      data-toggle="modal"
                      data-target="#videoModal"
                      onClick={() => {
                        changeUser(value, i);
                      }}
                    >
                      Calificar Video
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
