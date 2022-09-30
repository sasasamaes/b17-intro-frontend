import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios';

const PlanetDetail = (props) => {
  const { id } = useParams()


  const [planet, setPlanet] = useState({
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: ''
  })
  
  const BASE_URL = "https://swapi.dev/api/";

  useEffect(() => {
    axios
      .get(`${BASE_URL}planets/${id}`)
      .then(({ data }) => { setPlanet(data) })
      .catch((error) => console.log("error calling SWAPI"));
  }, []);

  return (
    <div>
      <h4>Detalle del planeta 🌍</h4>
      <p> Nombre: {planet.name}</p>
      <p>Periodo de rotación: {planet.rotation_period}</p>
      <p>Orbitación: {planet.orbital_period}</p>
      <p>Diametro: {planet.diameter}</p>
      <p>Clima: {planet.climate}</p>
      <p>Gravedad: {planet.gravity}</p>
    </div>
  );
};

export default PlanetDetail;
