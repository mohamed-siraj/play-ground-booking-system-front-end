// import { store } from "@/state/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from 'next/font/google';
// import { Provider } from 'react-redux';

// Configure the font
const lato = Lato({
  subsets: ['latin'], // Specify subsets based on your app's needs
  weight: '400',      // Optional: Specify weights, e.g., '400', '700'
  style: 'normal',    // Optional: Specify style, e.g., 'normal' or 'italic'
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    // </Provider>

  )
}
