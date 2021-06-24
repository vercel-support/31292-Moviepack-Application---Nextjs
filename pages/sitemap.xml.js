import React from "react";
import {
  trending_movies_url,
  now_playing_url,
  upcomming_url,
} from "../utils/api";
import axios from "axios";

const hostname = `https://moviepack.vercel.app`;

const createSitemap = (allMovies) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allMovies
          .map((movie) => {
            return `
                    <url>
                        <loc>${`${hostname}/movies/${
                          movie.id
                        }?name=${movie.name.replace(/&/g, "&amp;")}`}</loc>
                        
                    </url>
                `;
          })
          .join("")}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const { data: trendingMovies } = await axios.get(trending_movies_url());
    const { data: nowPlayingMovies } = await axios.get(now_playing_url());
    const { data: upcommingMovies } = await axios.get(upcomming_url());

    let allMovies = [];

    allMovies = allMovies.concat(
      trendingMovies.results,
      nowPlayingMovies.results,
      upcommingMovies.results
    );

    const moviesLinks = allMovies.map((movie) => {
      return {
        id: movie.id,
        name: movie.original_title.split(" ").join("_"),
      };
    });

    console.log(moviesLinks);

    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(moviesLinks));
    res.end();
  }
}

export default Sitemap;
