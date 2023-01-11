import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowRight,
  MdSearch,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import {
  BsTelephone,
  BsInstagram,
  BsTwitter,
  BsMastodon,
  BsLinkedin,
} from "react-icons/bs";
import {
  HiOutlineInformationCircle,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { TfiEmail, TfiFacebook, TfiYoutube } from "react-icons/tfi";
import { SlLocationPin } from "react-icons/sl";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);

  useEffect(() => {
    const resize = () => {
      window.pageYOffset > 200 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", resize);
  }, []);

  return (
    <>
      <header className="max-w-7xl mx-auto relative  ">
        <div className="fixed z-20 inset-x-0 top-0 w-full hidden md:block bg-slate-300">
          <div
            className={`px-6 md:px-16 mx-auto max-w-6xl bg-brand  justify-end h-12 bg-brandBlue transition duration-75 ease-in-out  transform   ${
              scrolled ? "hidden" : "flex"
            }`}
          >
            <Link href="/" className="flex items-center gap-2 ">
              <p className="text-xs text-white">University of Stuttgart</p>
              <div className="p-0.5 rounded-full border-white border">
                <MdOutlineKeyboardArrowRight className="text-xs text-white" />
              </div>
            </Link>
          </div>
          <div
            className={` px-6 md:px-16 mx-auto max-w-6xl  transition duration-100 ease-in-out  transform flex justify-between items-center   ${
              scrolled ? "py-6" : "py-10"
            }  ${menuIsOpen ? "bg-brandBlack" : "bg-white"}`}
          >
            {!menuIsOpen ? (
              <Image
                src="/svgs/logo-en.svg"
                width="300"
                height="61"
                className="object-center object-cover"
                alt="logo"
              />
            ) : (
              <Image
                src="/svgs/logo-inverted-en.svg"
                width="300"
                height="61"
                className="object-center object-cover w-52"
                alt="logo"
              />
            )}
            <div className="flex gap-4 items-center">
              {!menuIsOpen && (
                <Image
                  src="/images/language-removebg-preview.png"
                  width="44"
                  height="49"
                  className="object-center object-cover"
                  alt="logo"
                />
              )}
              <MdSearch
                className={`text-3xl  ${
                  menuIsOpen ? "text-white" : "text-brandBlack"
                }`}
              />
              {!menuIsOpen ? (
                <button
                  className="text-3xl text-brandBlack"
                  onClick={handleOpenMenu}
                >
                  <MdMenu className="text-3xl" />
                </button>
              ) : (
                <button
                  className="text-3xl text-brandBlack"
                  onClick={handleOpenMenu}
                >
                  <MdClose className="text-3xl text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className=" fixed z-20 inset-x-0 top-0 w-full md:hidden">
          <div
            className={`px-6 md:px-16 mx-auto max-w-6xl bg-brand flex justify-between h-12 bg-brandBlue transition duration-75 ease-in-out  transform   ${
              scrolled ? "-translate-y-12" : ""
            }`}
          >
            <Link href="/" className="flex items-center gap-2 ">
              <p className="text-xs text-white">Uni</p>
              <div className="p-0.5 rounded-full border-white border">
                <MdOutlineKeyboardArrowRight className="text-xs text-white" />
              </div>
            </Link>
            <div className="flex gap-3 items-center ">
              <Image
                src="/images/www-student-removebg-preview.png"
                width="44"
                height="49"
                className="object-center object-cover border-r border-r-white"
                alt="logo"
              />
              <MdSearch className="text-2xl text-white" />
            </div>
          </div>
          <div
            className={`bg-white px-6 md:px-16 mx-auto max-w-6xl  transition duration-100 ease-in-out  transform flex justify-between items-center   ${
              scrolled ? "py-6 -translate-y-12" : "py-10"
            } ${menuIsOpen ? "bg-brandBlack" : "bg-white"}`}
          >
            {!menuIsOpen ? (
              <Image
                src="/svgs/logo-en.svg"
                width="300"
                height="61"
                className="object-center object-cover w-40"
                alt="logo"
              />
            ) : (
              <Image
                src="/svgs/logo-inverted-en.svg"
                width="300"
                height="61"
                className="object-center object-cover w-40"
                alt="logo"
              />
            )}
            <div className="flex gap-4 items-center">
              {!menuIsOpen ? (
                <button
                  className="text-3xl text-brandBlack"
                  onClick={handleOpenMenu}
                >
                  <MdMenu className="text-3xl" />
                </button>
              ) : (
                <button
                  className="text-3xl text-brandBlack"
                  onClick={handleOpenMenu}
                >
                  <MdClose className="text-3xl text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-36">
        <div className="relative mx-auto max-w-6xl ">
          {menuIsOpen && (
            <div
              className={`h-screen w-full bg-black bg-opacity-75 sticky bottom-0 z-10 ${
                scrolled ? "top-32" : "top-40"
              }`}
            >
              <div className="fixed bg-black bg-opacity-75 pb-4 space-y-6">
                <div className="mx-6 md:x-16 mt-28 w-40 h-0.5 bg-brandBlue-light"></div>

                <ul className="max-w-[1110px] px-6 md:px-16 w-screen h-60 flex-1 flex flex-col  overflow-y-scroll mx-3">
                  {[
                    { name: "All study programs", url: "/all-study-programs" },
                    { name: "Starting out", url: "/starting-out" },
                    { name: "Study organization", url: "/study-organisation" },
                    {
                      name: "Examination organization",
                      url: "/examination-organization",
                    },
                    { name: "Digital Services", url: "/digital-services" },
                    { name: "Financing & stipends", url: "/" },
                    { name: "International students in Stuttgart", url: "/" },
                    { name: "International students in Stuttgart", url: "/" },
                    { name: "Study abroad", url: "/" },
                    { name: "Counseling", url: "/" },
                    {
                      name: "Internships, mentoring and getting on the career ladder",
                      url: "/",
                    },
                    {
                      name: "Additional programs & further education during studies",
                      url: "/",
                    },
                    { name: "Getting involved", url: "/" },
                    { name: "University A-Z", url: "/" },
                    { name: "Contact", url: "/" },
                  ].map((e, i) => (
                    <li
                      key={i}
                      className={` border-white border-dashed  ${
                        i !== 0 ? "border-t" : ""
                      }`}
                    >
                      <Link
                        href={e.url}
                        className="hover:bg-brandBlue-light px-4 py-4 block"
                      >
                        {i === 0 ? (
                          <p className="text-white text-xl">{e.name}</p>
                        ) : (
                          <div className="flex justify-between">
                            <p className="text-white font-bold text-xl">
                              {e.name}
                            </p>
                            <MdOutlineKeyboardArrowRight className="text-white " />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <section className=" relative px-6 md:px-16 mx-auto max-w-6xl bg-brandBlue-light pb-16 pt-20 flex gap-10 md:gap-16 md:items-center flex-col md:flex-row">
          <div className="flex-1 space-y-8 ">
            <h1 className="font-bold text-3xl">Students</h1>
            <p className="text-[17px] ">
              Important news, links, documents, and tips for students of the
              University of Stuttgart: This page offers information on your
              studies.
            </p>
          </div>

          <Link
            href="/"
            className="flex bg-transparent md:bg-brandBlack md:h-72 md:w-72  md:rounded-full group md:hover:bg-white items-center justify-center md:flex-col md:-mb-20 md:gap-20 md:pt-32"
          >
            <div className="md:order-last">
              <MdOutlineKeyboardArrowRight className="text-brandBlack text-xl md:text-white md:group-hover:text-brandBlack" />
            </div>
            <p className="text-brandBlack mx-10 md:text-white group-hover:no-underline underline md:no-underline   md:group-hover:no-underline md:group-hover:text-brandBlack font-bold text-sm">
              INFORMATION FOR PROSPECTIVE STUDENTS
            </p>
          </Link>
        </section>
        <section className="px-6 md:px-16 mx-auto py-16 max-w-6xl flex flex-col items-center justify-center bg-white">
          <form className="max- max-w-lg bg-slate-200 px-8 pb-8 pt-6 w-full  md:w-1/2">
            <p className="text-base">Begriff</p>
            <div class="mt-2 mb-3 w-full">
              <label
                for="exampleFormControlInput1"
                class=" inline-block mb-2 text-gray-700 sr-only"
              >
                label
              </label>
              <input
                type="text"
                class=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-[0.5px] border-gray-100 transition ease-in-out m-0 focus:bg-white focus:border-brandBlue focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar"
              />
            </div>
            <button
              type="button"
              className=" font-bold text-white text-base bg-brandBlue hover:bg-brandBlack px-8 py-3"
            >
              Begriff suchen
            </button>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-16">
            {[
              {
                img: "/images/easydb-1.jpeg",
                title: "Digital services",
                list: [
                  "C@MPUS - campus management and lectures",
                  "How to C@MPUS",
                  "ILIAS",
                  "University library",
                  "E-mail",
                  "Further digital services",
                ],
              },
              {
                img: "/images/easydb-2.jpeg",
                title: "Organizing your studies",
                list: [
                  "C@MPUS - campus management and lectures",
                  "How to C@MPUS",
                  "ILIAS",
                  "University library",
                  "E-mail",
                  "Further digital services",
                ],
              },
              {
                img: "/images/easydb-3.jpeg",
                title: "University life",
                list: [
                  "C@MPUS - campus management and lectures",
                  "How to C@MPUS",
                  "ILIAS",
                  "University library",
                  "E-mail",
                  "Further digital services",
                ],
              },
            ].map((e, i) => (
              <div key={i} className="space-y-6">
                <Image
                  alt="desc"
                  src={e.img}
                  width={370}
                  height={370}
                  className="md:w-full object-cover object-center md:h-40"
                />
                <h3 className="font-bold text-lg">{e.title}</h3>
                <ul>
                  {e.list.map((e, i) => (
                    <li key={i} className="flex gap-2">
                      <MdOutlineKeyboardArrowRight className="text-brandBlack text-base" />
                      <Link
                        href="/"
                        className=" text-brandBlue text-base font-bold hover:underline"
                      >
                        {e}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href="/"
            className="text-white text-base bg-brandBlue font-bold hover:bg-brandBlack px-8 py-3"
          >
            Study programs&apos; webpages for students
          </Link>
        </section>
        <section className="px-6 md:px-16 mx-auto max-w-6xl bg-brandBlack py-16 space-y-8">
          <h2 className="font-bold text-2xl text-white">
            {" "}
            News and events for students
          </h2>
          <div className="md:grid grid-cols-3 gap-10 hidden">
            <div className="flex flex-col gap-10">
              {[
                {
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  img: "/images/instagram.jpeg",
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
              ].map((e, i) => (
                <div
                  key="i"
                  className="space-y-5 cursor-pointer  bg-white hover:bg-brandBlue-light"
                >
                  {e?.img ? (
                    <div>
                      <Image
                        width={220}
                        height={220}
                        src={e.img}
                        alt="news Article"
                        className="object-cover object-center w-full rounded-full "
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <h5 className="text-lg font-bold">{e.title}</h5>
                    <div class="flex gap-2 text-gray-500 text-base">
                      <p class="">{e.date_1}</p>
                      <p>|</p>
                      <p class="">{e.date_2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              {[
                {
                  img: "/images/24A_1280.jpeg",
                  title: `Latest episode: "Intelligent systems will help us in crises and in the future"`,
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  img: "/images/photocase.jpeg",
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  img: "/images/diversity-kalender.jpeg",
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
              ].map((e, i) => (
                <div
                  key="i"
                  className="space-y-5 cursor-pointer bg-white hover:bg-brandBlue-light"
                >
                  {e?.img ? (
                    <div>
                      <Image
                        width={i === 0 ? 560 : 220}
                        height={i === 0 ? 400 : 220}
                        src={e.img}
                        alt="news Article"
                        className={`object-cover object-center w-full  ${
                          i === 0 ? "" : "rounded-full"
                        }`}
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <h5 className="text-lg font-bold">{e.title}</h5>
                    <div class="flex gap-2 text-gray-500 text-base">
                      <p class="">{e.date_1}</p>
                      <p>|</p>
                      <p class="">{e.date_2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-10">
              {[
                {
                  img: "/images/stressed-student.jpeg",
                  title:
                    "Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips.",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  img: "/images/Sim_Tech_Folge_03_Szene_27.jpeg",
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
              ].map((e, i) => (
                <div
                  key="i"
                  className="space-y-5 cursor-pointer bg-white hover:bg-brandBlue-light"
                >
                  {e?.img ? (
                    <div>
                      <Image
                        width={i === 0 ? 560 : 220}
                        height={i === 0 ? 400 : 220}
                        src={e.img}
                        alt="news Article"
                        className={`object-cover object-center w-full  ${
                          i === 0 ? "" : "rounded-full"
                        }`}
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <h5 className="text-lg font-bold">{e.title}</h5>
                    <div class="flex gap-2 text-gray-500 text-base">
                      <p class="">{e.date_1}</p>
                      <p>|</p>
                      <p class="">{e.date_2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:hidden">
            <div className="flex flex-col gap-10">
              {[
                {
                  title: "Newsticker: Information on the coronavirus",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  img: "/images/24A_1280.jpeg",
                  title: `Latest episode: "Intelligent systems will help us in crises and in the future"`,
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  img: "/images/stressed-student.jpeg",
                  title:
                    "Everyone feels sometimes stressed during their studies. But what can you do against it? Constanza has a few tips.",
                  date_1: "Article",
                  date_2: "11/10/22",
                },
                {
                  title:
                    "Impressive research in the field of business administration",
                  date_1: "News",
                  date_2: "11/10/22",
                },
              ].map((e, i) => (
                <div
                  key="i"
                  className="space-y-5 cursor-pointer bg-white hover:bg-brandBlue-light"
                >
                  {e?.img ? (
                    <div>
                      <Image
                        width={560}
                        height={400}
                        src={e.img}
                        alt="news Article"
                        className="object-cover object-center w-full "
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <h5 className="text-lg font-bold">{e.title}</h5>
                    <div class="flex gap-2 text-gray-500 text-base">
                      <p class="">{e.date_1}</p>
                      <p>|</p>
                      <p class="">{e.date_2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4 justify-center">
            <Link
              href="/"
              className="border border-white text-white text-base bg-brandBlack uppercase font-bold hover:bg-brandBlack px-8 py-3"
            >
              All News
            </Link>
            <Link
              href="/"
              className="border border-white text-white text-base bg-brandBlack uppercase font-bold hover:bg-brandBlack px-8 py-3"
            >
              All Articles
            </Link>
          </div>
        </section>
        <section className="px-6 md:px-16 mx-auto max-w-6xl mt-10 bg-brandBlue py-16">
          <h2 className="font-bold text-2xl text-white">
            Information for students
          </h2>
          <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
              {
                title: "All study programs",
                description: `On the webpages of your degree program you will find information on the study program structure, …`,
              },
            ].map((e, i) => (
              <Link
                key={i}
                href="/"
                className="flex gap-3 md:gap-4 items-center  group"
              >
                <div className="p-3 md:p-14 rounded-full border border-white bg-transparent group-hover:bg-white">
                  <MdOutlineKeyboardArrowRight className="text-white group-hover:text-brandBlack md:text-3xl text-base" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">{e.title}</h5>
                  <p className="text-base text-white">{e.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="px-6 md:px-16 mx-auto max-w-6xl bg-white py-20 ">
          <h2 className="font-bold text-2xl text-brandBlack">Contact</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-brandBlack p-6 flex flex-col gap-8">
              <div className="flex items-center justify-center">
                <Image
                  alt="contact"
                  width={150}
                  height={150}
                  className="object-cover object-center rounded-full"
                  src="/images/dezernat-Internationales-IZ.jpeg"
                />
              </div>
              <div className="space-y-4">
                <h5 className="font-bold text-brandBlack text-[22px]">
                  Dezernat Internationales
                </h5>
                <div className="space-y-2.5">
                  <div className="flex gap-2 items-center">
                    <RiProfileLine className="text-brandBlack text-base" />
                    <Link
                      href={"/"}
                      className="block text-brandBlack hover:no-underline underline text-base"
                    >
                      Profile Page
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BsTelephone className="text-brandBlack text-lg" />
                    <Link
                      href={"/"}
                      className="block text-brandBlack hover:no-underline underline text-base"
                    >
                      +49 711 685 68566
                    </Link>
                  </div>
                  <div className="flex gap-2 items-start">
                    <TfiEmail className="text-brandBlack text-lg" />
                    <Link
                      href={"/"}
                      className="block text-brandBlack hover:no-underline underline text-base"
                    >
                      Write e-mail
                    </Link>
                  </div>
                  <div className="flex gap-2 items-start">
                    <HiOutlineInformationCircle className="text-brandBlack text-xl" />
                    <p className="flex-1">
                      <Link
                        href={"/"}
                        className="inline-block flex-1 text-brandBlack hover:no-underline underline text-base"
                      >
                        Office hours{" "}
                        <span className="inline-block">
                          <HiOutlineExternalLink className="text-xs text-brandBlue inline-block" />
                        </span>
                      </Link>
                      <span className="text-brandBlack inline-block text-base">
                        : Mon & Wed 10 a.m. to noon; Office hours (on site): Mon
                        & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-brandBlack p-5 flex flex-col gap-8">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center rounded-full h-[150px] w-[150px] bg-gray-200">
                  <SlLocationPin className="text-white text-5xl block" />
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="font-bold text-brandBlack text-[22px]">
                  Student Counseling Center
                </h5>
                <div className="space-y-2.5">
                  <div className="flex gap-2 items-center">
                    <RiProfileLine className="text-brandBlack text-base" />
                    <Link
                      href={"/"}
                      className="block text-brandBlack hover:no-underline underline text-base"
                    >
                      Profile Page
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BsTelephone className="text-brandBlack text-lg" />
                    <Link
                      href={"/"}
                      className="block text-brandBlack hover:no-underline underline text-base"
                    >
                      +49 711 685 82133
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-brandBlack p-5 flex flex-col gap-8 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center ">
                <div className="flex items-center justify-center rounded-full h-[150px] w-[150px] bg-gray-300">
                  <SlLocationPin className="text-brandBlack text-5xl block" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-brandBlack text-[22px]">
                    Student Service and Examination Office
                  </h5>
                  <p className="text-brandBlack text-xs">
                    Pfaffenwaldring 5 c, 70569 Stuttgart, House of students
                  </p>
                </div>
                <div className="space-y-2.5">
                  <div className="flex gap-2 items-center">
                    <RiProfileLine className="text-brandBlack text-base" />
                    <Link
                      href={"/"}
                      className="block text-brandBlack hover:no-underline underline text-base"
                    >
                      Further information
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Wrapper */}
        {/* <section className="px-6 md:px-16 mx-auto max-w-6xl"></section> */}
      </main>
      <footer className="px-6 md:px-16 mx-auto max-w-6xl bg-brandBlack py-20 space-y-16">
        <div className="flex gap-6 lg:gap-16 items-start flex-wrap">
          <Image
            src="/svgs/logo-inverted-en.svg"
            width="300"
            height="61"
            className="object-center object-cover w-52"
            alt="logo"
          />
          <ul className=" flex justify-center items-center flex-wrap lg:justify-start gap-4">
            <li className="flex items-center justify-center gap-2 flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center border rounded-full p-4 hover:bg-brandBlue hover:border-brandBlue transition ease-in-out"
              >
                <TfiFacebook className="text-white text-base" />
              </Link>
              <p className="text-white text-base">Facebook</p>
            </li>
            <li className="flex items-center justify-center gap-2 flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center border rounded-full p-4 hover:bg-brandBlue hover:border-brandBlue transition ease-in-out"
              >
                <BsInstagram className="text-white text-base" />
              </Link>
              <p className="text-white text-base">Instagram</p>
            </li>
            <li className="flex items-center justify-center gap-2 flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center border rounded-full p-4 hover:bg-brandBlue-light hover:border-brandBlue-light transition ease-in-out"
              >
                <BsTwitter className="text-white text-base" />
              </Link>
              <p className="text-white text-base">Twitter</p>
            </li>
            <li className="flex items-center justify-center gap-2 flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center border rounded-full p-4 hover:bg-blue-700 hover:border-blue-700 transition ease-in-out"
              >
                <BsMastodon className="text-white text-base" />
              </Link>
              <p className="text-white text-base">Mastodon</p>
            </li>
            <li className="flex items-center justify-center gap-2 flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center border rounded-full p-4 hover:bg-red-500 hover:border-red-500 transition ease-in-out"
              >
                <TfiYoutube className="text-white text-base" />
              </Link>
              <p className="text-white text-base">Youtube</p>
            </li>
            <li className="flex items-center justify-center gap-2 flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center border rounded-full p-4 hover:bg-sky-600 hover:border-sky-600 transition ease-in-out"
              >
                <BsLinkedin className="text-white text-base" />
              </Link>
              <p className="text-white text-base">LinkedIn</p>
            </li>
            <li className="flex items-center justify-center gap-2 flex-col">
              <Link
                href={"/"}
                className="flex items-center justify-center border group rounded-full w-[52px] h-[52px] hover:bg-white hover:border-white transition ease-in-out"
              >
                <p className="text-white text-xs block group-hover:text-brandBlack">
                  U<span className="inline-block rotate-180">S</span>US
                </p>
              </Link>
              <p className="text-white text-sm ">USUS-Blog</p>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {[
            {
              title: "Audience",
              list: [
                "Students",
                "Employees",
                "Alumni and supporters",
                "Industry",
              ],
            },
            {
              title: "Formalities",
              list: [
                "Legal notice",
                "Privacy notice",
                "Accessibility",
                "Certificates",
              ],
            },
            {
              title: "Services",
              list: [
                "Contact",
                "Press",
                "Jobs",
                "Apply for a Doctorate or Postdoc",
                "Uni-Shop",
              ],
            },
            {
              title: "Organization",
              list: [
                "Faculties and Institutes",
                "Facilities",
                "Central Administration",
              ],
            },
          ].map((e, i) => (
            <div key={i} className="space-y-6 px-4">
              <h5 className="font-bold text-white">{e.title}</h5>
              <ul className="space-y-2">
                {e.list.map((e, i) => (
                  <li key={i}>
                    <Link
                      href={"/"}
                      className="text-white underline hover:no-underline text-sm"
                    >
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
