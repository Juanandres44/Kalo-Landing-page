import React, { useState, useEffect } from "react";
import "../App.css";
import {Header} from "./header";
import SmoothScroll from "smooth-scroll";
import { Benefits } from "./benefits";
import JsonData from "../data/data.json";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });

  const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
  return (
    <div>
        <Header />
        <Benefits data={landingPageData.Features} />
    </div>
  );
}

export default Home;