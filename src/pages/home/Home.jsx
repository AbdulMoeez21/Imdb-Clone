import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MovieList from "../../components/movie list/MovieList";
import "./home.css";
import CarouselC from "../../components/carousel/CarouselC";

const Home = () => {
  return (
    <>
      <CarouselC />
      <MovieList />
    </>
  );
};
{
  /* <span>{movie.original_title}</span> */
}
export default Home;
