import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const resize = () => {
      window.pageYOffset > 20 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", resize);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 w-full transition duration-1000 ease-in-out">
        <div
          className={`bg-brand bg-brandBlue transition duration-1000 ease-in-out h-20 ${
            scrolled ? "hidden" : "flex"
          }`}
        >
          <h1 className="text-4xl font-bold ">S Heloo mother</h1>
        </div>
        <div className="bg-gray-300 h-36">
          <h1 className="text-4xl font-bold ">S Heloo mother</h1>
        </div>
      </header>
      <main>
        <section className="h-screen"></section>
        <section className="h-screen"></section>
      </main>
      <footer></footer>
    </>
  );
}
