
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import Spinner from '../Spinner';

const Home = () => {

    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['','N','a','b','o','t','h']
    const jobArray = ['F','u','l','l','','S','t','a','c','k','','W','e','b','','D','e','v','e','l','o','p','e','r','.']
    
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
            <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={11}
                />
                <br />
                </h1>
                
                <h2> | NEXT.js | REACT.js | Node.js | MONGOdb | SQL | AWS | DevOps | RESTFUL & GRAPHQL APIS | Django | Vue.js</h2>
                <div>
                    <p className='about-p'>
                    Welcome to my portfolio! I'm a dedicated full stack developer based in Kenya, Africa, with a passion for crafting scalable web applications.
                    <br />
                    I'm currently employed at Kola Technologies, where I've honed my skills in creating innovative and efficient solutions.
                    <br />
                    My journey in the world of coding and problem-solving is not just a profession; it's a hobby that fuels my enthusiasm for continuous learning and improvement. 
                    <br />
                    My ultimate goal is to ascend to the role of a senior full stack developer, and I'm committed to the path of excellence in every project I undertake.
                    <br />
                    Explore my portfolio to witness the results of my dedication and expertise in web development. 
                    <br/>
                    If you're looking for a developer who can turn your ideas into reality, I'm here to help. Let's collaborate and bring your web projects to life.
                    <br/>
                    Thank you for visiting my portfolio, and I look forward to the opportunity of working with you.
                    </p>
                </div>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Spinner />
            
            </div>

            <Loader type='pacman'/>
        </>
    );
}

export default Home