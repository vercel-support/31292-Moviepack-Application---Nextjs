const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
import axios from "axios";
import {
  trending_movies_url,
  now_playing_url,
  upcomming_url,
} from "../../utils/api";

export default async (req, res) => {
  try {
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
        name: movie.original_title,
      };
    });

    const links = [];

    moviesLinks.map((movie) => {
      links.push({
        url: `/movies/${movie.id}?name=${movie.name.replace(/ /g, "_")}`,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Add other pages
    const pages = ["/about-us"];
    pages.map((url) => {
      links.push({
        url,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
