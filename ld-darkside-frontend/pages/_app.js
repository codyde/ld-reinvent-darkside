// import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import { withLDProvider } from "launchdarkly-react-client-sdk";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withLDProvider({
  // TODO: Sercret storage? Vault?
  clientSideID: process.env.NEXT_PUBLIC_LD_CLIENT_KEY,
  // user: {
  //   key: "default",
  // },
  options: {
    bootstrap: "localStorage",
  },
})(MyApp);
