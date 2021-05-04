import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSistrix } from "react-icons/fa";
import Link from "next/link";

//Redux
import { useDispatch } from "react-redux";
// import { show_search_bar } from "../Redux/Actions/searchBarAction";

function NavBar() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // dispatch(show_search_bar());
  };

  return (
    <Bar>
      <div>
        <img src="./images/logo.png" alt="Moviepack LOGO" />

        <div>
          <Link href="/about-us">
            <a className="about-link">
              <AboutUs> About Moviepack </AboutUs>
            </a>
          </Link>

          <FaSistrix
            onClick={clickHandler}
            style={{ fill: "#ffc400", cursor: "pointer" }}
          />
        </div>
      </div>
    </Bar>
  );
}

const Bar = styled(motion.div)`
  max-width: 100vw;
  height: 45px;
  background-color: #1b1b1b;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
  }
  img {
    width: 80px;
  }

  .about-link {
    text-decoration: none;
  }
`;

const AboutUs = styled.h5`
  margin-right: 1rem;
`;

export default NavBar;
