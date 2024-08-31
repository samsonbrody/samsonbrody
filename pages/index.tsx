/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer"; // 1.9K gzipped
import { Divide as Hamburger } from "hamburger-react";
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div>
      <Head>
        <title>Samson Brody Web Dev</title>
        <meta name="description" content="Samson Brody Web Developer" />
        <meta name="keywords" content="Samson Brody, web developer"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      <div className="w-screen h-screen  bg-[#031926] flex items-center flex-col justify-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "calc(100vw - 100%)", opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              exit={{ x: -700, opacity: 0 }}
              className="fixed top-0 w-full h-12 flex items-center justify-evenly text-[#071E22] bg-[#36827F] z-40"
            >
              <a href="https://github.com/samsonbrody">
                <p className="hover:opacity-80 hover:underline cursor-pointer hover:underline-offset-4 transition-all duration-150">
                  Work
                </p>
              </a>
              <Link
                href="https://soundcloud.com/brodieonthabeat"
                passHref={true}
                target="_blank"
              >
                <p className="hover:opacity-80 hover:underline cursor-pointer hover:underline-offset-4 transition-all duration-150">
                  Music
                </p>
              </Link>
              <a href="mailto:samsonbrody@gmail.com">
                <p className="hover:opacity-80 hover:underline cursor-pointer hover:underline-offset-4 transition-all duration-150">
                  Contact
                </p>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="top-0 right-2 fixed z-50">
          <Hamburger
            color={isOpen ? "#071E22" : "#36827F"}
            size={20}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <motion.p
            // initial={{ opacity: 0.3, scale: 1 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1 }}
            className="text-[#77ACA2] font-Inter font-light mt-24 mb-12 text-3xl"
          >
            {`Hey, I'm Samson!`}
          </motion.p>

          <Image
            src={"/avatar_new.png"}
            alt="Samson Brody"
            width={300}
            height={300}
            className="rounded-full"
          />
          <motion.p className="text-[#9DBEBB] font-Inter font-light mt-12 text-xl text-center px-4">
            {` I'm a web developer and musician based in Los Angeles, currently working at `}
            <Link
              href={`https://www.spectrasonics.net/`}
              className="hover:text-[#77ACA2] hover:opacity-75 transition-all ease-in-out delay-150"
            >
              Spectrasonics Virtual Instruments.
            </Link>
          </motion.p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ ease: "ease", duration: 2, repeat: Infinity }}
          className="relative  w-full h-32 mt-10 mb-3  flex items-center justify-around"
        >
          <motion.li variants={item}>
            <img
              className="w-10"
              src="/1174949_js_react js_logo_react_react native_icon.png"
              alt="react"
            />
          </motion.li>
          <motion.li variants={item}>
            <img
              className="w-20 text-blue-300 invert"
              src="/800px-Nextjs-logo.svg.png"
              alt="next"
            />
          </motion.li>
          <motion.li variants={item}>
            <img
              className="w-10 text-blue-300 "
              src="/sanitylogo.webp"
              alt="sanity"
            />
          </motion.li>
          <motion.li variants={item}>
            <img
              className="w-10 text-blue-300 "
              src="/Tailwind_CSS_Logo.svg.png"
              alt="tailwind"
            />
          </motion.li>
          <motion.li variants={item}>
            <img
              className="w-8 text-blue-300 "
              src="/JavaScript-logo.png"
              alt="sanity"
            />
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
