import React, { useState, useEffect } from "react";

export default function ModalNotes({ userData, questions }) {
  const [userData2, setUserData2] = useState(userData);

  useEffect(() => {
    console.log(userData);
    setUserData2(userData);
  }, [userData]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {`${userData2?.name} ${userData2?.lastName}`}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body overflow-auto">
            <h3>Preguntas de seleccion multiple</h3>
            <ul>
              {/* console.log(userData2?.answers) */}
              {Object.values(userData2?.answers).map((value1, i) => {
                return (
                  <li key={"li" + i}>
                    {i + 1}-{" "}
                    {Array.isArray(questions) ? questions[i + 1].question : ""}
                    <br />
                    <p>
                      Puntuacion:{" "}
                      <b>{value1?.rating ? `${value1?.rating}` : "0"}</b>
                      <br />
                      {value1?.url ? (
                        <video className="w-100" controls key={value1?.url}>
                          {console.log(value1?.url)}
                          <source
                            src={
                              value1?.url ||
                              "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            }
                            type="video/webm"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        ""
                      )}
                      {value1.rating > 0 ? (
                        <p>
                          Comentarios: <b>{value1?.comments}</b>
                        </p>
                      ) : (
                        ""
                      )}
                    </p>
                  </li>
                );
              })}
              {/* Object.values(userData?.answers).map((value1, i) => {
                console.log(userData?.answers);
                return (
                  <li>
                    {i + 1}-
                    {Array.isArray(questions) ? questions[i + 1].question : ""}
                    <br />
                    <p>
                      Puntuacion: <b>{`${value1?.rating}`}</b>
                    </p>
                    {Array.isArray(questions) && value1.rating <= 1 ? (
                      Object.entries(questions[i + 1].options).map((value) => {
                        return (
                          <ul>
                            {value1.option === value[0] ? (
                              value1.rating !== 1 ? (
                                <li className="bg-danger">
                                  {value[0]} - {value[1]}
                                </li>
                              ) : (
                                <li className="bg-success">
                                  {value[0]} - {value[1]}
                                </li>
                              )
                            ) : (
                              <li>
                                {value[0]} - {value[1]}
                              </li>
                            )}
                          </ul>
                        );
                      })
                    ) : (
                      <>
                        <p>
                          Comentarios: <b>{value1?.comments}</b>
                        </p>
                      </>
                    )}
                  </li>
                );
              }) */}
            </ul>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
