import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from './Slide'
// import Slider from "react-slick";

import { getPopularMovie, getPopularTV} from '../../services/profileService'

function Popular() {
    const [popImages, setPopImages] = useState(null);

    useEffect(() => {
        async function getAllPopularImgs() {
            if (!popImages) {
                const movies = await getPopularMovie();
                const tele = await getPopularTV();
                const response = tele.concat(movies)
                // console.log(response)
                setPopImages(response);
            }
        }

        getAllPopularImgs();
    }, [popImages]);

    return(<Slide title={"Popular"} Images={popImages} />)
  }

  export default Popular;