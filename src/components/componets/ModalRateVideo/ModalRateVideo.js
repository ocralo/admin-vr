import React, { useState, useEffect } from "react";

import firebase from "firebase";

export default function ModalRateVideo({ userData }) {
  useEffect(() => {}, [userData]);

  const [rateVideo, setrateVideo] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(1);

  const db = firebase.database();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(numberQuestion+1);
    let auxData = { ...userData?.answers };
    auxData[numberQuestion+1].rating =
      Object.values(rateVideo[numberQuestion]).reduce(
        (valorAnterior, valorActual, indice, vector) => {
          if (Object.values(rateVideo[numberQuestion]).length - 1 !== indice) {
            return parseInt(valorAnterior) + parseInt(valorActual);
          }
          return parseInt(valorAnterior);
        }
      ) / 4;
    auxData[numberQuestion+1].comments =
      rateVideo[numberQuestion][
        Object.values(rateVideo[numberQuestion]).length
      ];

    db.ref(`users/${userData.name}123456`).update({ answers: auxData });
  };

  const handleChange = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;
    let auxArray = [...rateVideo];
    auxArray[i] = { ...auxArray[i], [name]: value };
    setNumberQuestion(i);
    setrateVideo(auxArray);
  };

  return (
    <>
      <div
        className="modal fade bd-example-modal-xl"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {`${userData?.name} ${userData?.lastName}`}
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
              <h3>Preguntas de video</h3>
              <div className="accordion" id="accordionExample">
                {userData?.answers.map((data, i) => {
                  return (
                    <>
                      {!data?.url || (
                        <div className="card" key={`userAcordion-${i}`}>
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button
                                className="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Video #{i}
                              </button>
                            </h2>
                          </div>

                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col-md-6">
                                    <video className="w-100" controls>
                                      <source
                                        src={
                                          data?.url ||
                                          "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                        }
                                        type="video/webm"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                  <div className="col-md-6">
                                    <form onSubmit={handleSubmit}>
                                      <div className="form-group">
                                        <label htmlFor="presentacion">
                                          Orientación al logro
                                        </label>
                                        <select
                                          className="form-control"
                                          id="presentacion"
                                          name="1"
                                          onChange={(e) =>
                                            handleChange(e, i - 1)
                                          }
                                        >
                                          <option></option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="fluides">
                                          Flexibilidad
                                        </label>
                                        <select
                                          className="form-control"
                                          id="fluides"
                                          name="2"
                                          onChange={(e) =>
                                            handleChange(e, i - 1)
                                          }
                                        >
                                          <option></option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="presentation">
                                          Inteligencia emocional
                                        </label>
                                        <select
                                          className="form-control"
                                          id="presentation"
                                          name="3"
                                          onChange={(e) =>
                                            handleChange(e, i - 1)
                                          }
                                        >
                                          <option></option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Tenacidad
                                        </label>
                                        <select
                                          className="form-control"
                                          id="exampleFormControlSelect1"
                                          name="4"
                                          onChange={(e) =>
                                            handleChange(e, i - 1)
                                          }
                                        >
                                          <option></option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">
                                          Observaciones
                                        </label>
                                        <textarea
                                          className="form-control"
                                          id="exampleFormControlTextarea1"
                                          name="5"
                                          onChange={(e) =>
                                            handleChange(e, i - 1)
                                          }
                                          rows="3"
                                        ></textarea>
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                      >
                                        Guardar
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
              {/* ------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
