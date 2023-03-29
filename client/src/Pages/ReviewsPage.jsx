import React, { useRef, useState } from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components'
import ReviewsCollected from '../Components/Reviews/ReviewsCollected';
import SelectionSection from '../Components/Reviews/SelectionSection';
import { getReviewsFromAPI, searchForItem } from '../services/profileService';

// for this to Worker, need to use multi search to get media type and id and then use the reviews route

const ReviewsPage = () => {

  const [isReadMore, setIsReadMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState ("")  
  const [results, setResults] = useState()
  const [filmSelected, setFilmSelected] = useState();
  const [reviewFound, setReviewFound] = useState(false)
  const [film, setFilm] = useState()
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const imageTile = (tile) => {
    return(
      <ImgTile media={tile.media_type} onClick={(e) => handleResults(tile)}>
        <img src={`https://image.tmdb.org/t/p/w500${tile.poster_path}`} alt={tile.id} ></img>
        <h1>{tile.title}</h1>
        {/* <p>{tile.media_type}</p>
        <p>{tile.id}</p> */}
      </ImgTile>

    )
   }

  const handleResults = async (tile) => {
    console.log(tile)
    setFilm(tile)
    const reviews = await getReviewsFromAPI(tile.id, tile.media_type)
    console.log("The reviews", reviews.data.results)
    setReviewFound(true)
    setFilmSelected(reviews.data.results)
    // console.log(e.target.media)
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

 const handleSubmit = async() => {
    // console.log(searchTerm)
    const res = await searchForItem(searchTerm)
    console.log(res.data.results)
    setResults(res.data.results)

 }

 
  {!results && <p>Loading...</p>}
  return (
    <Container>
      <Content>
        <SearchBar>
          <input onChange={handleChange} type="text" placeholder='Search here...'></input>
          <button name="" onClick={e => handleSubmit(e)}>Search</button>
        </SearchBar>
        <ReviewsSection>
          <ReviewsNav>
            <button>Find reviews</button>
            <button>My Reviews</button>
            <button>Member reviews</button>
            <button>Add a review</button>
          </ReviewsNav>
          {!reviewFound && <Images>{results && results.map(result => imageTile(result))}</Images>
          }
         {reviewFound && <SelectionSection data={film}/>}
         
          
        </ReviewsSection>
      </Content>
      {reviewFound && (<>
        <h1>Reviews</h1>
      <ReviewsCollected data={filmSelected}/>
      </>
       
      )}
      
    </Container>
  )
}

const Container = styled.div`
  position:relative;
  width:100vw;
  min-height:100vh;
  height: 100%;
  background-color:#212F3C;
  disply:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  color:white;
`

const Content = styled.div`
  padding:10px;
  position:relative;
  ${'' /* background-color:red; */}
  top:100px;
  margin-bottom:140px
 
`

const SearchBar = styled.div`
  padding:10px;
  input{
    width:70%;
    height:35px;
    border:2px solid orange;
    border-radius:15px;
    margin-right:5px;
    background-color:transparent;
    color:white;
    padding: 0 10px;
  }
  button{
    height:35px;
    border:2px solid orange;
    border-radius: 8px;
    padding:0 5px;
    background-color:transparent;
    color:orange;
  }
`

const ReviewsSection = styled.div`
  width:100%;
  ${'' /* background-color:pink; */}
  display:flex;
  flex-direction:row;
  margin-top:35px;
`

const ReviewsNav = styled.div`
  ${'' /* flex:1; */}
  ${'' /* background-color:red; */}
  display:flex;
  flex-direction: column;
  gap:10px;
  width:250px;
  
  button{
    border:1px solid orange;
    background-color:transparent;
    border-radius:15px;
    color:white;

  }
`

const Images = styled.div`
  display:flex;
  flex-direction: column; 
  flex-wrap: wrap;
  gap:20px;
`

const ImgTile = styled.div`
  padding:6px;
  display: flex;
  flex-direction:row;
  h1{
    align-content: center;
  text-align:center;
  }
 
  img{
    width:250px;
    height:350px;
    ${'' /* height:100px; */}
  }
  

`









export default ReviewsPage
