import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import requests from '../../utils/requests'
import "./Banner.css"

const Banner = () => {
    const[movie,setmovie]=useState({})
    useEffect(()=>{
        async function fetchData() {
            const Response = await axios.get(requests.fetchTrending);
            const results = Response.data.results;
            setmovie(results[Math.floor(Math.random() * results.length)]);
        }
        fetchData();

    },[])
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>

          <p className="banner__description">
            {movie?.overview?.length > 150
              ? movie.overview.slice(0, 150) + "..."
              : movie?.overview}
          </p>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
}

export default Banner
