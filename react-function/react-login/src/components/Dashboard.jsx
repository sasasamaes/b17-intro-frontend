import React, { useEffect, useState } from "react";
import axios from "axios";
import PlanetDetail from "./PlanetDetail";

import { Container, Row, Col } from "react-bootstrap";
import LoadingHOC from "./LoadingHOC";
import PlanetList from "./PlanetList";

const ListWithLoading = LoadingHOC(PlanetList);
const Dashboard = () => {
  const BASE_URL = "https://swapi.dev/api/";

  const [planetArray, setPlanetArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [planetInfo, setPlanetInfo] = useState({});
  const [planetIndex, setplanetIndex] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}planets`)
      .then(({ data }) => {
        setPlanetArray(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error calling SWAPI");
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (planetIndex) {
      axios
        .get(`${BASE_URL}planets/${planetIndex}`)
        .then(({ data }) => {
          console.log("planet details", data);
          setPlanetInfo(data);
        })
        .catch((error) => console.log("error calling SWAPI", error));
    }
  }, [planetIndex]);

  return (
    <Container>
      <Row>
        <ListWithLoading isLoading={isLoading} planetArray={planetArray} />
        {/* <PlanetDetail
            details={planetInfo}
            handleResetList={() => setPlanetInfo({})}
          /> */}
      </Row>
      )}
    </Container>
  );
};

export default Dashboard;
