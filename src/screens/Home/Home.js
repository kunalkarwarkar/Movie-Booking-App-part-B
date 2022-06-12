import React, { useState } from "react";
import "./Home.css";
import "../../common/Header/Header";
import Header from "../../common/Header/Header.js";
import UpcomingMoviesList from "./homeComponents/UpcomingMoviesList";
import moviesData from "../../assets/moviesData";
import ReleasedMoviesList from "./homeComponents/ReleasedMoviesList";
import FormCard, { userSelection } from "./homeComponents/FormCard";
import genres from "../../assets/genre";
import artists from "../../assets/artists";
function Home(){
    const [state, setState] = useState({
        data: moviesData,
        genres: genres,
        artists: artists,
        userSelection: moviesData,
      })
      const filterHandler = () => {
        if (
          userSelection.name === "" &&
          userSelection.releaseDateEnd === "" &&
          userSelection.releaseDateStart === "" &&
          userSelection.genres.length === 0 &&
          userSelection.artists.length === 0
        ) {
          const currentState = {...state};
          currentState.userSelection = moviesData;
          setState(currentState);
          return moviesData;
        }
        else {
            const filteredMovies = state.data.filter((movie) => {
              if (
                movie.title.toLowerCase() === userSelection.name.toLowerCase() ||
                movie.genres.some((genre) => userSelection.genres.includes(genre)) || parseInt(new Date(movie.release_date).getTime()) <= parseInt(new Date(userSelection.releaseDateEnd).getTime()) ||
                parseInt(new Date(movie.release_date).getTime()) >= parseInt(new Date(userSelection.releaseDateStart).getTime()) || movie.artists.some((artist) =>
                  userSelection.artists.includes(
                    `${artist.first_name} ${artist.last_name}`
                  )
                )
              ) {
                console.log(userSelection.releaseDateStart);
                console.log(parseInt(new Date(movie.release_date).getTime()) > parseInt(new Date(userSelection.releaseDateEnd).getTime()))
                return movie;
              }
              else
              return null;
          });
          const currentState = {...state};
          currentState.userSelection = filteredMovies;
          setState(currentState);
        }
      };
      return (
        <div>
          <Header />
          <span className="heading">Upcoming Movies</span>
          <UpcomingMoviesList moviesData={state.data} />
          <div className="flex-container">
          <div className="left">
            <ReleasedMoviesList moviesData={state.userSelection} />
          </div>
          <div className="right">
            <FormCard
              genres={state.genres}
              artists={state.artists}
              filterHandler={filterHandler}
            />
          </div>
        </div>
      </div>
    );
  }

export default Home;