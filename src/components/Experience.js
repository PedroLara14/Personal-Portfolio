import React, { useRef } from 'react'
import { motion,  useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null);

  return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration: 0.5, type:"spring"}}
    >
      <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink} target='_blank' className="text-primary capitalize">@{company}</a></h3>
      <span className="capitalize font-medium text-dark/75">
        {time} | {address}
      </span>
      <p className="font-medium w-full ">
        {work}
      </p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Computer Engineer"
            company="UNAULA"
            companyLink="https://www.unaula.edu.co/"
            time="2020-2022"
            address="Medellín, Colombia."
            work="I developed projects in which I was able to learn and improve my programming logic in languages such as C# and Python. Additionally, I developed teamwork skills and effective communication abilities."
          />
          <Details
            position="Web Developer"
            company="Academlo"
            companyLink="https://www.academlo.com/"
            time="2023"
            address="Querétaro, México."
            work="I worked as a developer in both front-end and back-end, completing projects both individually and collaboratively with the other students in the bootcamp. This included designing responsive web pages, user interfaces, and database design."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience