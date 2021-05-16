import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { filmCardPopup } from "../utils/transitions";
import Link from "next/link";
import Image from "next/image";
import { truncateName } from "../utils/configurations";

function FilmCard({ id, name, rating, poster }) {
  return (
    <Outer>
      <Filmcard variants={filmCardPopup} initial="hidden" animate="show">
        <div className="image">
          <Image
            src={`https://image.tmdb.org/t/p/w185${poster}`}
            alt={`Moviepack ${name}`}
            width={11.8 * 16}
            height={18 * 16}
            loading="lazy"
            objectFit="contain"
          />
        </div>
        <Title>
          <h5> {truncateName(name)} </h5>
        </Title>
        <Rating>
          <img src="/images/star.svg" alt="" />
          <p> {rating} </p>
        </Rating>
        <Link
          href={`/movies/${id}?name=${name.replace(/ /g, "_")}`}
          as={`/movies/${id}?name=${name.replace(/ /g, "_")}`}
        >
          <a>
            <button> More Details </button>
          </a>
        </Link>
      </Filmcard>
    </Outer>
  );
}

const Outer = styled.div`
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: all 1s ease;
  }
`;

const Filmcard = styled(motion.div)`
  background: rgb(18, 18, 18);
  border-radius: 0.6rem;
  width: 11.8rem;
  height: 25rem;
  overflow: hidden;
  text-align: center;
  opacity: 1;
  button {
    margin-top: 10px;
    background: rgba(92, 92, 92, 0.301);
    border: none;
    outline: none;
    height: 1.8rem;
    width: 8rem;
    color: #5985ff;
    border-radius: 0.4rem;
    cursor: pointer;
    :hover {
      background: rgba(219, 219, 219, 0.301);
      color: white;
      transition: 1s all;
    }
  }
`;

const Title = styled(motion.div)`
  h5 {
    margin-top: 0.7rem;
    font-size: 14px;
  }
`;

const Rating = styled(motion.div)`
  img {
    width: 10px;
    margin-top: 1rem;
    margin-right: 10px;
    display: inline;
  }
  p {
    display: inline-block;
    font-size: 12px;
  }
`;

export default FilmCard;
