import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import "../styles/global.scss";
import "/styles/homepage.css";   // ✅ Add this

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
