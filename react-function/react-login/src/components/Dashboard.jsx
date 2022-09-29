import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const BASE_URL = "https://swapi.dev/api/";

  const [planetArray, setPlanetArray] = useState([]);
  const [planetInfo, setPlanetInfo] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}planets`)
      .then(({ data }) => setPlanetArray(data.results))
      .catch((error) => console.log("error calling SWAPI"));
  }, []);

  const recoverPlanetDetail = () => console.log("llamada otra vez a la API ");

  return (
    <>
      {planetArray.length === 0 ? (
        <h3>Cargando información... ⭕️</h3>
      ) : (
        planetArray.map((planet, index) => (
          <div
            key={index}
            onClick={recoverPlanetDetail}
            style={{ border: "2px solid white", margin: "10px 0" }}
          >
            <p>Name: {planet.name}</p>
            <p>Climate {planet.climate}</p>
            <div>
              {" "}
              <b>Lista de peliculas: </b>
              <ul>
                {" "}
                {planet.films.map((planet, i) => (
                  <li key={i}> URL: {planet} </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Dashboard;
