import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Airline from "./Airline";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    axios
      .get("api/v1/airlines.json")
      .then((res) => {
        setAirlines(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return <Airline key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <Fragment>
      <Home>
        <Header>
          <h1>Open Flights</h1>
          <Subheader>Honest reviews</Subheader>
        </Header>

        <Grid>{grid}</Grid>
      </Home>
    </Fragment>
  );
};

export default Airlines;
