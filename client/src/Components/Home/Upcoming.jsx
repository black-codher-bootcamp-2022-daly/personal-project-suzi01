import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slide from './Slide'
// import Slider from "react-slick";

import { getUpcoming} from '../../services/profileService'

function UpComing() {
    const [upImages, setUpImages] = useState(null);

    useEffect(() => {
        async function getUpcomingImgs() {
            if (!upImages) {
                const response = await getUpcoming();
                // console.log(response)
                setUpImages(response);
            }
        }

        getUpcomingImgs();
    }, [upImages]);

    return(<Slide title={"Upcoming"} Images={upImages} />)
  }

  export default UpComing;