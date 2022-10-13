import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const PlanetList = ({ planetArray }) => {
  const navigate = useNavigate();
  const recoverPlanetDetail = (valorIndice) => {
    // setplanetIndex(valorIndice + 1);
    navigate(`/planet/${valorIndice + 1}`);
  };

  return (
    <>
      {planetArray.map((planet, index) => (
        <Col
          lg={6}
          key={index}
          onClick={() => recoverPlanetDetail(index)}
          style={{
            border: "2px solid white",
            margin: "10px 0",
            cursor: "pointer",
          }}
        >
          {/* <Link to={`/planet/${id}`}>
        
        </Link> */}
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
        </Col>
      ))}
    </>
  );
};

export default PlanetList;
