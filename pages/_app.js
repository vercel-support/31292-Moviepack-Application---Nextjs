import GlobalStyles from "../styles/GlobalStyles";
import wrapper from "../Redux/store";
import { useEffect } from "react";
import ReactGA from "react-ga";
import { useRouter } from "next/dist/client/router";
import { PageAnims } from "../utils/transitions";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    };
    ReactGA.initialize("G-X166MGGPDE", { debug: false });
    ReactGA.set({ page: router.pathname });
    ReactGA.pageview(router.pathname);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <motion.div
        key={router.pathname}
        variants={PageAnims}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </>
  );
}

export default wrapper.withRedux(MyApp);
