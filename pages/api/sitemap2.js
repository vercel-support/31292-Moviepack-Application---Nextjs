import { SitemapStream, streamToPromise } from "sitemap";
import axios from "axios";
import {
  trending_movies_url,
  now_playing_url,
  upcomming_url,
} from "../../utils/api";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // List of posts
    const links = [];

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

    moviesLinks.map((movie) => {
      links.push({
        url: `/movies/${movie.id}?name=${movie.name.replace(/ /g, "_")}`,
      });
    });

    const staticPages = ["/", "/about-us"];

    staticPages.map((page) => {
      links.push({ url: page });
    });

    // Create each URL row
    links.forEach((link) => {
      smStream.write({
        url: link.url,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
