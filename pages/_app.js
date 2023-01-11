import "../styles/globals.css";
import localFont from "@next/font/local";
const univers = localFont({
  src: [
    {
      path: "../public/fonts/univers1.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/univers2.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/univers3.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-univers",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${univers.variable} font-sans lg:bg-slate-300`}>
      <Component {...pageProps} />
    </main>
  );
}
