import React, { useState, useEffect } from "react";

import { Player } from "video-react";
import "video-react/dist/video-react.css";

export default function ModalRateVideo({ userData, questions }) {
  useEffect(() => {
    console.log(questions);
    console.log(userData);
  }, [questions, userData]);
  const [rateVideo, setrateVideo] = useState({
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = parseInt(e.target.value);
    let aux = { ...rateVideo, [name]: value };
    setrateVideo(aux);
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
                {console.log(userData?.answers[1]?.url)}
                {userData?.answers.map((data, i) => {
                  console.log(data);
                  return (
                    <>
                      {(!data?.url&&data?.url!=="") || (
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
                                Pregunta #{i}
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
                                    <video width="320" height="240" controls>
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
                                    {/* <Player>
                                  <source
                                    src={
                                      data?.url ||
                                      "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    }
                                    /*src = {
                        userData.answers
                          ? "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                          : userData.answers[1].url
                      } 
                                  />
                                </Player> */}
                                  </div>
                                  <div className="col-md-6">
                                    <form onSubmit={handleSubmit}>
                                      <div className="form-group">
                                        <label htmlFor="presentacion">
                                          Cuenta con buena presentacion
                                        </label>
                                        <select
                                          className="form-control"
                                          id="presentacion"
                                          name="1"
                                          onChange={handleChange}
                                        >
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="fluides">
                                          Se distre facilmente
                                        </label>
                                        <select
                                          className="form-control"
                                          id="fluides"
                                          name="2"
                                          onChange={handleChange}
                                        >
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="presentation">
                                          Cuenta con buen nivel al hablar
                                        </label>
                                        <select
                                          className="form-control"
                                          id="presentation"
                                          name="3"
                                          onChange={handleChange}
                                        >
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                          Tiene fluides al hablar
                                        </label>
                                        <select
                                          className="form-control"
                                          id="exampleFormControlSelect1"
                                          name="4"
                                          onChange={handleChange}
                                        >
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                        </select>
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                      >
                                        Submit
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
