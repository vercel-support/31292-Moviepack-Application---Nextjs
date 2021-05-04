import React from "react";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="MoviePack - Know about Movies! | Upcomming Movies | Popular Movies |
          Search your favourite movie!"
        />
        <meta
          name="description"
          content="Moviepack is a movie app that gives info about all the movies in the world. You can check trending, upcoming, popular movies from Moviepack, and also you can search for your favorite movie."
        />
        <meta
          name="keywords"
          content="movies, movie app, upcoming movies, popular movies, movies near me"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta
          property="og:title"
          content="MoviePack - Know about Movies! | Upcomming Movies | Popular Movies |
          Search your favourite movie!"
        />
        <meta
          property="og:description"
          content="Moviepack is a movie app that gives info about all the movies in the world. You can check trending, upcoming, popular movies from Moviepack, and also you can search for your favorite movie."
        />
        <meta
          property="og:image"
          content="https://moviepack.vercel.app//images/banner.jpg"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap"
          rel="stylesheet"
        />

        <title>{title}</title>
      </Head>

      <div> {children} </div>
    </>
  );
};

export default Layout;
