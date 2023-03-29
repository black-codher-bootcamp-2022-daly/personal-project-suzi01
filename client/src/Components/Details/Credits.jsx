import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Missing_credit from "./Missing_credit";



import { getMediaCredits } from "../../services/profileService";

function Credits(props) {
    const [credits, setCredits] = useState();
    const {media_id, media_type} = props;

    useEffect(() => {
        async function getAllCredits() {
            const response = await getMediaCredits(media_type,media_id );
            // console.log(response)
            setCredits(response);
        }

        getAllCredits();
    }, [credits, media_id, media_type]);




    const renderCard = (credit) => (
        <CastCard>
        {credit.profile_path !== null ? (<img
                src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
                alt={credit.original_name}
            />) : (<Missing_credit title={credit.original_name}/>)}
            
            <p>
                {credit.original_name}
                <br />
                as
                <br />
                {credit.character}
            </p>
        </CastCard>)

    if (!credits) return <div>Loading...</div>;

    // console.log(credits.poster_path)
    return (

        // <p>hello</p>
        <CastCards>
                {credits.length>0 && credits.map((credit) => renderCard(credit))}
        </CastCards>
    );
}

const CastCards = styled.div`
  padding-top: 10px;
  display: flex;
  align-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CastCard = styled.div`
  /* width: px; */
  text-align: center; 
  img {
    width: 70%;
    ${'' /* max-width:120px; */}
    border-radius:8px;
  }
  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    img{
      padding-top:5px;
      width:50%;
    }
    p {
      padding-left:10%;
    /* text-align: center; */
    /* width:50%; */
  }
  }
`;


export default Credits; 