import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import project1 from'../../assets/images/project1.png'
import project2 from'../../assets/images/project2.png'

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="portfolio-image"
                                alt="Portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
            <div className="container portfolio-page">
                <h2 className="work-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Experience".split("")}
                        idx={15}
                    />
                </h2>
            <div className="work-experience1">
                    <p class="experience1"><b>Foreverline Diamond 05/19-09/19</b></p>
                    <p>Cooperate with designers to create clean interfaces,clean code, simple and experiences.</p>
                    <p>Complete detailed programming and development tasks for front-end public and internal websites as well as challenging back-end code</p>
                    <p>Creating Admin Panel with PHP and coding with HTML, CSS and JavaScript</p>
            </div>
            <div className="work-experience2">
                    <p class="experience1"><b>Tuga Techonology 06/22-09/22</b></p>
                    <p>Using Scrum/Agile development methodologies</p>
                    <p>Coding with React.js, a JavaScript framework</p>
                    <p>Learned Ajax, Jquery and SEO transictions.</p>
                
                <h2 className="work-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"My Projects".split("")}
                        idx={15}
                    />
                </h2>
            </div>
                            
                    <section className='project__section'>
                        <div className="project__left1">
                            <img className='project__img' src={project1} alt="foreverline diamond" />
                        </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://www.foreverline.com.tr/" target='_blank' rel="noreferrer" className='project__headingSecondary'><h2 >Foreverline Diamond</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                                Creating Admin Panel and connecting database. And using HTML, CSS and JavaScript for front-end.  
                            </p>
                            <div className='project__tags'> HTML &nbsp; CSS &nbsp; JavaScript &nbsp; PHP &nbsp; MySQL</div>
                        </div>
                    </div>
                </section>
                <section className='project__section'>
                        <div className="project__left1">
                            <img className='project__img' src={project2} alt="blog-site" />
                        </div>
                    <div className="project__right">
                        <h3 className='project__headingTertiary'>Featured Project</h3>
                        <a href="https://github.com/mtahanur/Blog-Site" target='_blank' rel="noreferrer" className='project__headingSecondary'><h2 >Blog-Site</h2></a>
                        <div className="project__descriptionContainer">
                            <p className='project__description'>
                                Creating Blog-Site with Bootstrap  
                            </p>
                            <div className='project__tags'> HTML &nbsp; CSS &nbsp; Bootstrap</div>
                        </div>
                    </div>
                </section>
                <div>
                    <p>You can look other projects My GitHub :) </p>

                </div>
                
                
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;