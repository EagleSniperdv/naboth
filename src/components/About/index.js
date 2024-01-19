import { useEffect, useState } from 'react'
import {
  
  faCss3,
 
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Spinner from '../Spinner'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
        clearTimeout(timer);
    }
});

  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='about-p'>
          <p>
          As a passionate and dedicated full-stack developer based in Kenya, 
          I bring a wealth of experience and expertise in crafting scalable web applications. 
          My journey in the world of web development has been a constant pursuit of excellence, and 
          I am committed to continuous growth and innovation in this ever-evolving field.
          </p>
          <p align="LEFT">
          My skills encompass a wide range of technologies, from front-end frameworks like React and Angular to back-end systems with Node.js and Python. 
          I have a keen eye for user experience and an unwavering commitment to delivering polished, user-friendly web applications. 
          My proficiency in database design, API integration, and responsive web design ensures that the solutions 
          I build are not only functional but also visually appealing..
          </p>
          <p>
          One project that I particularly enjoyed working on was an e-commerce platform for a local business in Kenya. 
          This project allowed me to demonstrate my full-stack capabilities, from designing an intuitive front-end user interface to 
          implementing a robust back-end system. The challenge of creating a seamless shopping experience for customers, 
          complete with secure payment processing and inventory management, was both rewarding and fulfilling.
          </p>
          </div>
        </div>

        <Spinner />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
