import React from "react";
import styled from "styled-components";
import FeatureImage from "./Home/FeatureImage";
import { Link } from "react-router-dom";


function Watchlist() {
  return (
    <Container>
      <FilterButtons>
        <button>All</button>
        <button>Movies</button>
        <button>Shows</button>
      </FilterButtons>
      <Films>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">Blade Runner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film">BladeRunner 2049</FilmTitle>
          <p>Rating</p>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film"></FilmTitle>
          <span>Rating</span>
        </Film>
        <Film>
          <img
            src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88314/94381/Blade-Runner-2049-Advance-Style-Poster-buy-original-movie-posters-at-starstills__44596.1588086923.jpg?c=2"
            alt=""
          />
          <FilmTitle to="/film"></FilmTitle>
          <span>Rating</span>
        </Film>
      </Films>
    </Container>
  );
}
const Container = styled.div`
  // top:80px;
  position: absolute;
  background: linear-gradient(
    112.1deg,
    rgb(32, 38, 57) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
  margin: 0;
  padding: 10px;
`;
const FilterButtons = styled.div`
  display: flex;
  padding: 60px 40px 0px;
  margin: 30px;
  button {
    width: 100px;
    height: 40px;
    margin-right: 25px;
    border-radius: 20px;
    border: 2px solid white;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 15px;
    color: white;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    margin: auto 0;
    button {
      width: 100%;
      margin-right: 10px;
      font-size: 10px;
      border-radius: 10px;
    }
  }
`;
const Films = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-template-rows: repeat(8, 5vw); */
  grid-gap: 10px;
  /* display: flex;
  flex-wrap:wrap;
  flex-direction:row; */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Film = styled.div`
  padding: 10px;
  /* flex-basis: auto; */
  img {
    width: 100%;
    box-shadow: 11px 1px 13px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 15px;
    border-radius: 5px;
  }
  p {
    margin-top: 10px;
    color: white;
  }
`;
const FilmTitle = styled.a`
  color: white;
`;
export default Watchlist;