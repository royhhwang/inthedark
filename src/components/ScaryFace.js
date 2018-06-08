import React from "react";
import InvisFace from "../img/scaryface.png";
import "../css/ScaryFace.css";

const ScaryFace = () => (
    <img src={InvisFace} alt="eyes" id="track-eyes" draggable="false" />
);

export default ScaryFace;