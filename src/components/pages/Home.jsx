import React from "react";
import { useLocation } from "react-router-dom";
import Stadistics from "../Stadistics";
import styled from "styled-components";


const Container = styled.section`
  display: flex;
  width: 70%;
`;

function Home() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Container>
        <Stadistics/>
      </Container>
    </>
  );
}

export default Home;
