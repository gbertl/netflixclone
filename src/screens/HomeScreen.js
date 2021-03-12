import React, {useEffect, useState} from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../Request";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import db from "../firebase";
import {useHistory} from "react-router";

function HomeScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    db.collection("customers")
      .doc(user?.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.empty) history.replace("/profile");
      });
  }, [user, history]);

  return (
    <div className="homeScreen">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
