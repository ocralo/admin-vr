import React, { useState, useEffect } from "react";
import Navbar from "../../componets/NavBar/Navbar";
import UserTabVideo from "../../componets/User/UserTabVideo";
//importo firebase
import * as firebase from "firebase";

export default function RateVideo() {
  const [Users, setUsers] = useState({});
  const [Questions, setQuestions] = useState({});

  useEffect(() => {
    const ref =firebase
    .database()
    .ref();
    
      ref.child("users")
      .on("value", (snapshot) => {
        setUsers(snapshot.val());
      });
      ref.child("questions")
      .on("value", (snapshot) => {
        setQuestions(snapshot.val());
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-4">
        <h3>Calificaciones de usuarios</h3>
        <div className="row">
          <div className="col-md-12">
            <UserTabVideo UsersData={Users} questions={Questions}></UserTabVideo>
          </div>
        </div>
      </div>
    </>
  );
}
