import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import RickAndMortyProjectImg from "../../public/images/projects/rick-and-morty-project-pic.png";
import eCommerceProjectImg from "../../public/images/projects/eCommerceProjectImg.png"
import WeatherAppProjectImg from "../../public/images/projects/WeatherAppProjectImg.png"
import FortuneCookiesProjectImg from "../../public/images/projects/FortuneCookiesProjectImg.png"
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, image, link, githubLink}) => {

  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
            href={githubLink}
            target="_blank"
          >
            Visit The Project
          </Link>
          <Link className="w-10 ml-4" href={githubLink} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

const Project = ({ title, type, image, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col  tems-center justify-center rounded-xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline"
            href={githubLink}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8" href={githubLink} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Pedro Lara | Projects</title>
        <meta name="description" content="My Projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Rick And Morty APP"
                summary="This is a web application that uses the Rick and Morty API to display information about the characters, episodes, and locations of the series."
                image={RickAndMortyProjectImg}
                link="https://pedro-rick-and-mory-react-app.netlify.app/"
                githubLink="https://github.com/PedroLara14/Rick-And-Morty-APP"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Website"
                title="Weather App"
                image={WeatherAppProjectImg}
                link="https://pedro-weather-app.netlify.app/"
                githubLink="https://github.com/PedroLara14/Weather-React-App"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Website"
                title="Fortune Cookies App"
                image={FortuneCookiesProjectImg}
                link="https://pedro-fortune-cookie-react-app.netlify.app/"
                githubLink="https://github.com/PedroLara14/Fortune-Cookies-App"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Website"
                title="eCommerce with JavaScript and MixItUp"
                image={eCommerceProjectImg}
                link="https://shopping-cart-pedrolara.netlify.app/"
                githubLink="https://github.com/PedroLara14/ShoppingCart-Academlo-Gen-26-Vanilla-JS-Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects