import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import "../styles/global.scss";   // Existing global styles
import "katex/dist/katex.min.css"; // Adds the math styling

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;