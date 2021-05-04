import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import wrapper from "../../Redux/store";
import { movieDetailAction } from "../../Redux/Actions/movieDetailAction";
import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../Components/Layout";

function MovieDetail({ clickedMovie }) {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title={`${clickedMovie.original_title} on Moviepack`}>
      <Page>
        <div>
          <Title>
            <FaAngleLeft
              cursor="pointer"
              style={{ width: 25 }}
              onClick={clickHandler}
              color="#ffc400"
            />
            <h1>{clickedMovie.original_title}</h1>
          </Title>
          <Genres>
            {clickedMovie.genres.map((genre) => (
              <h5 key={genre.id}> {genre.name} &nbsp;</h5>
            ))}

            <h5>
              |&nbsp; &nbsp; <img src="/images/star.svg" alt="rating-star" />
              {clickedMovie.vote_average}
            </h5>
            <hr />
          </Genres>
          <CoverImage>
            {/* <img
        src="https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
        alt=""
      /> */}
            <Image
              src={`https://image.tmdb.org/t/p/w1280${clickedMovie.backdrop_path}`}
              alt=""
              width={1280}
              height={250}
              loading="lazy"
            />
          </CoverImage>
          <Description>
            <p> {clickedMovie.overview} </p>
            <p className="release-date">
              Release Date :{clickedMovie.release_date}{" "}
            </p>
            <p className="release-date"> Status : {clickedMovie.status} </p>
          </Description>
          <Companies>
            <h3> Producers: </h3>
            {clickedMovie.production_companies.map((company) => (
              <h5 key={company.id}> {company.name} </h5>
            ))}
          </Companies>
          <Other>
            <h5> Budget : $ {clickedMovie.budget} </h5>
            <h5> Revenue : $ {clickedMovie.revenue} </h5>
            <h5> Popularity : {clickedMovie.popularity} </h5>
          </Other>
          <hr />
          <h5 className="website">
            Official Website :
            <a href="www.tenet.com"> {clickedMovie.homepage} </a>
          </h5>
        </div>
      </Page>
    </Layout>
  );
}

const Page = styled(motion.div)`
  min-height: 100vh;
  background-color: #1b1b1b;
  padding-bottom: 1rem;
  hr {
    margin-top: 12px;
    border-bottom: none;
    border-top: 1px solid #ffc400;
  }
  .website {
    text-align: center;
    margin-top: 10px;
  }
`;

const Title = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Montserrat", sans-serif;
    color: #ffc400;
  }
  padding-top: 10px;
  text-align: center;
`;

const Genres = styled(motion.div)`
  text-align: center;
  h5 {
    display: inline;
    margin-top: 10px;
  }
  hr {
    margin-top: 12px;
    border-bottom: none;
    border-top: 1px solid #ffc400;
  }
  img {
    width: 10px;
    margin-top: 1rem;
    margin-right: 10px;
    display: inline;
  }
`;

const CoverImage = styled(motion.div)`
  img {
    width: 100vw;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  padding: 1rem 10rem;
  p {
    text-align: center;
  }

  .release-date {
    margin-top: 1rem;
    color: #ffc400;
  }

  @media (max-width: 550px) {
    padding: 1rem 2rem;
  }
`;

const Companies = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5 {
    margin-top: 8px;
    font-family: "Montserrat";
  }
`;

const Other = styled(motion.div)`
  text-align: center;
  margin-top: 10px;
  p {
    font-family: "Roboto";
  }
`;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query: { slug } }) => {
    await store.dispatch(movieDetailAction(slug));

    const { clickedMovie } = store.getState().movieDetail;

    return {
      props: {
        clickedMovie,
      },
    };
  }
);

export default MovieDetail;
