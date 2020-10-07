import React, { useState, useEffect } from "react";

import firebase from "firebase";

export default function ModalRateVideo({ userData }) {
  useEffect(() => {}, [userData]);

  const [rateVideo, setrateVideo] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(1);

  const db = firebase.database();

  const handleSubmit = (e, i) => {
    //console.log(i);
    //console.log(numberQuestion);
    e.preventDefault();
    //console.log(numberQuestion + 1);
    let auxData = { ...userData?.answers };
    auxData[i].rating =
      Object.values(rateVideo[i - 1]).reduce(
        (valorAnterior, valorActual, indice, vector) => {
          if (Object.values(rateVideo[i - 1]).length - 1 !== indice) {
            return parseInt(valorAnterior) + parseInt(valorActual);
          }
          return parseInt(valorAnterior);
        }
      ) / 4;
    auxData[i].comments =
      rateVideo[i - 1][Object.values(rateVideo[i - 1]).length];

    db.ref(`users/${userData.name}123456`).update({ answers: auxData },error=>{
      if (error) {
        // The write failed...
        alert("Ocurrió un error al guardar la respuesta");
      } else {
        alert("Se ha guardado la respuesta con éxito");
      }
    });
  };

  const handleChange = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;
    let auxArray = [...rateVideo];
    auxArray[i] = { ...auxArray[i], [name]: value };
    //setNumberQuestion(i);
    setrateVideo(auxArray);
  };

  const switchQuestionsForm = (i) => {
    switch (i) {
      case 1:
        return (
          <form onSubmit={(e) => handleSubmit(e, i)}>
            <h3>Realiza una breve presentación sobre ti</h3>
            <div className="form-group">
              <label htmlFor="fluides">COMUNICACIÓN</label>
              <select
                className="form-control"
                id="fluides"
                name="1"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="exampleFormControlTextarea1">OBSERVACIONES</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="2"
                onChange={(e) => handleChange(e, i - 1)}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Guardar
            </button>
          </form>
        );
        break;
      case 2:
        return (
          <form onSubmit={(e) => handleSubmit(e, i)}>
            <h3>
              Teniendo en cuenta el cargo al cual te estas postulando, ¿cuales
              serían tus estrategias para apalancar el crecimiento de la
              compañía?
            </h3>
            <div className="form-group">
              <label htmlFor="fluides">ENFOQUE ESTRATÉGICO</label>
              <select
                className="form-control"
                id="fluides"
                name="1"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="fluides">CREDIBILIDAD Y CONOCIMIENTO.</label>
              <select
                className="form-control"
                id="fluides"
                name="2"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="exampleFormControlTextarea1">OBSERVACIONES</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="3"
                onChange={(e) => handleChange(e, i - 1)}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Guardar
            </button>
          </form>
        );
        break;
      case 3:
        return (
          <form onSubmit={(e) => handleSubmit(e, i)}>
            <h3>
              ¿Como describes tu estilo de liderazgo y que elementos consideras
              que lo hacen exitoso?
            </h3>
            <div className="form-group">
              <label htmlFor="fluides">LIDERAZGO</label>
              <select
                className="form-control"
                id="fluides"
                name="1"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="fluides">RESPETO</label>
              <select
                className="form-control"
                id="fluides"
                name="2"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="fluides">SEGUIMIENTO</label>
              <select
                className="form-control"
                id="fluides"
                name="3"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="exampleFormControlTextarea1">OBSERVACIONES</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="4"
                onChange={(e) => handleChange(e, i - 1)}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Guardar
            </button>
          </form>
        );
        break;
      case 4:
        return (
          <form onSubmit={(e) => handleSubmit(e, i)}>
            <h3>
              ¿Como logras que tu equipo de trabajo este alineado con los
              objetivos del área y de la compañía?
            </h3>
            <div className="form-group">
              <label htmlFor="fluides">ORIENTACION A RESULTADO</label>
              <select
                className="form-control"
                id="fluides"
                name="1"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="fluides">PLANEACION</label>
              <select
                className="form-control"
                id="fluides"
                name="2"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="fluides">SEGUIMIENTO Y RETROALIMENTACION</label>
              <select
                className="form-control"
                id="fluides"
                name="3"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="exampleFormControlTextarea1">OBSERVACIONES</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="4"
                onChange={(e) => handleChange(e, i - 1)}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Guardar
            </button>
          </form>
        );
        break;
      case 5:
        return (
          <form onSubmit={(e) => handleSubmit(e, i)}>
            <h3>
              ¿En tu experiencia como identificas y gestionas oportunidades de
              desarrollo en tu equipo?
            </h3>
            <div className="form-group">
              <label htmlFor="fluides">DESARROLLO DE EQUIPO</label>
              <select
                className="form-control"
                id="fluides"
                name="1"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="exampleFormControlTextarea1">OBSERVACIONES</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="2"
                onChange={(e) => handleChange(e, i - 1)}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Guardar
            </button>
          </form>
        );
        break;

      default:
        return (
          <form onSubmit={(e) => handleSubmit(e, i)}>
            <h3>
              ¿Que aspectos identificas para continuar en el desarrollo de tu
              rol de Líder?
            </h3>
            <div className="form-group">
              <label htmlFor="fluides">AUTO CONCIENCIA</label>
              <select
                className="form-control"
                id="fluides"
                name="1"
                onChange={(e) => handleChange(e, i - 1)}
                required
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
              <label htmlFor="exampleFormControlTextarea1">OBSERVACIONES</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="2"
                onChange={(e) => handleChange(e, i - 1)}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Guardar
            </button>
          </form>
        );
        break;
    }
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
                                data-target={`#collapse${i}`}
                                aria-expanded="true"
                                aria-controls={`collapse${i}`}
                              >
                                Video #{i}
                              </button>
                            </h2>
                          </div>

                          <div
                            id={`collapse${i}`}
                            className={i == 1 ? "collapse show" : "collapse"}
                            aria-labelledby="headingOne"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col-md-6">
                                    <video
                                      className="w-100"
                                      controls
                                      key={data?.url}
                                    >
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
                                    {switchQuestionsForm(i)}
                                    {/* <form onSubmit={(e) => handleSubmit(e, i)}>
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
                                          required
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
                                          required
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
                                          required
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
                                          required
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
                                          required
                                        ></textarea>
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                      >
                                        Guardar
                                      </button>
                                    </form> */}
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
