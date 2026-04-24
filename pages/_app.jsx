import "../styles/globals.css";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Head>
        <link rel="icon" href="/logo-white.png" type="image/png" />
        <link rel="shortcut icon" href="/logo-white.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-white.png" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
