import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeatureImage from "../Components/Home/FeatureImage";
import Trending from "../Components/Home/Trending";
import Popular from "../Components/Home/Popular";
import UpComing from "../Components/Home/Upcoming";


function Home() {

return (
    <Container>
      <FeatureImage />
      <Trending />
      <Popular />
      <UpComing />
    </Container>
  );
}
const Container = styled.main`
  ${'' /* position: relative; */}
  ${'' /* background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  ); */}
  background-color:black;
  /* overflow-x: hidden; */
  overflow: hidden;
  /* padding: 0 25px; */
  z-index:-1;
`;
export default Home;