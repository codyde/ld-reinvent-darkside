// import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import { withLDProvider } from "launchdarkly-react-client-sdk";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withLDProvider({
  // TODO: Sercret storage? Vault?
  clientSideID: '6195a8005b2be8144fea2ff9',
  // user: {
  //   key: "default",
  // },
  options: {
    bootstrap: "localStorage",
  },
})(MyApp);
