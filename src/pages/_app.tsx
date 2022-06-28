import "../styles/globals.css";
import "../styles/app.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div>
        {/* <Alert /> */}

        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}

export default MyApp;
