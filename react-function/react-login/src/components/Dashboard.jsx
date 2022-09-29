import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const BASE_URL = "https://swapi.dev/api/";

  const [planetArray, setPlanetArray] = useState([]);
  const [planetInfo, setPlanetInfo] = useState({});
  const [planetIndex, setplanetIndex] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${BASE_URL}planets`)
      .then(({ data }) => setPlanetArray(data.results))
      .catch((error) => console.log("error calling SWAPI"));
  }, []);

  useEffect(() => {
    console.log("planetIndex", planetIndex);
    axios
      .get(`${BASE_URL}planets/${planetIndex}`)
      .then(({ data }) => console.log("detalle planeta", data))
      .catch((error) => console.log("error calling SWAPI", error));
  }, [planetIndex]);

  const recoverPlanetDetail = (valorIndice) => {
    setplanetIndex(valorIndice + 1);
  };

  return (
    <>
      {planetArray.length === 0 ? (
        <h3>Cargando información... ⭕️</h3>
      ) : (
        planetArray.map((planet, index) => (
          <div
            key={index}
            onClick={() => recoverPlanetDetail(index)}
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
