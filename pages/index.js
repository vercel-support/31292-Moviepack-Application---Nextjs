import React from "react";
import { movieAction } from "../Redux/Actions/moviesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import wrapper from "../Redux/store";
import Search from "../Components/Search";
import { useSelector } from "react-redux";
import Layout from "../Components/Layout";

//Components
import FilmCard from "../Components/FilmCard";
import Carousel from "../Components/Carousel";
import NavBar from "../Components/NavBar";

function Homepage({
  nowplayingMovies,
  trendingMovies,
  upcommingMovies,
  searchedMovies,
}) {
  const show_search = useSelector((state) => state.show_search);

  return (
    <Layout
      title="MoviePack - Know about Movies! | Upcomming Movies | Popular Movies |
    Search your favourite movie!"
    >
      <MainPage>
        <NavBar />
        <Carousel />
        {show_search && <Search refreshPage={refreshPage} />}
        {searchedMovies.length !== 0 ? (
          <Category transition={{ duration: 0.5 }}>
            <h3 className="title"> Searched Movies </h3>
            <hr />
            <Collections>
              {searchedMovies.map((movie) => (
                <FilmCard
                  key={movie.id}
                  id={movie.id}
                  name={movie.original_title}
                  rating={movie.vote_average}
                  poster={movie.poster_path}
                />
              ))}
            </Collections>
          </Category>
        ) : (
          ""
        )}

        <Category transition={{ duration: 0.5 }}>
          <h3 className="title"> Now Playing Movies </h3>
          <hr />
          <Collections>
            {nowplayingMovies.map((movie) => (
              <FilmCard
                key={movie.id}
                id={movie.id}
                name={movie.original_title}
                rating={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </Collections>
        </Category>
        <Category>
          <h3 className="title"> Trending Movies </h3>
          <hr />
          <Collections>
            {trendingMovies.map((movie) => (
              <FilmCard
                key={movie.id}
                id={movie.id}
                name={movie.original_title}
                rating={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </Collections>
        </Category>
        <Category>
          <h3 className="title"> Upcomming Movies </h3>
          <hr />
          <Collections>
            {upcommingMovies.map((movie) => (
              <FilmCard
                key={movie.id}
                id={movie.id}
                name={movie.original_title}
                rating={movie.vote_average}
                poster={movie.poster_path}
              />
            ))}
          </Collections>
        </Category>
      </MainPage>
    </Layout>
  );
}

const MainPage = styled(motion.div)`
  min-height: 100vh;
  background-color: #1b1b1b;
`;

const Category = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  hr {
    width: 8rem;
    height: 0.09rem;
    border: none;
    border-top: 3px solid #ffc400;
    margin-top: 0.3rem;
  }
`;

const Collections = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-gap: 2.5rem;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(5, max(50px, 1fr));
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(50px, 1fr));
  }

  @media (max-width: 987px) {
    grid-template-columns: repeat(3, minmax(50px, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    grid-gap: 1rem;
  }
`;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(movieAction());

    const {
      nowplayingMovies,
      trendingMovies,
      upcommingMovies,
      searchedMovies,
    } = store.getState().movies;

    return {
      props: {
        nowplayingMovies,
        trendingMovies,
        upcommingMovies,
        searchedMovies,
      },
    };
  }
);

export default Homepage;
