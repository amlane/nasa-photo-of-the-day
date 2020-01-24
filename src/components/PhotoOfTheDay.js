import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

import "../App.css";

function PhotoOfTheDay() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    console.log("yo");
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-08-13`
      )
      .then(res => {
        setPhoto(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (!photo) return <h1>LOADING...</h1>;
  return (
    <div>
      <Photo photo={photo} />
    </div>
  );
}

export default PhotoOfTheDay;
