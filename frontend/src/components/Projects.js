import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { FaNode } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'

export const Projects = () => {
    return (
        <>
            <div className='section-container'>
                <h1><strong>PROJECTS</strong></h1>
                <h4>Here are some of the personal projects I've worked on:</h4>
                <ul className='projects-list'>
                    <div className='left'>
                        <li>
                            <h3><strong>Node.js CRUD / Data Analysis App</strong></h3>
                            <div className='lang-icons'><h2><SiJavascript /> <FaNode /> <SiMysql /></h2></div>
                            <p>CRUD and Data Visualization academic project, honing skills in JavaScript, Node.js, Express, and database integration.</p>
                        </li>
                        <li>
                            <h3><strong>Jeopardy Trivia Game</strong></h3>
                            <div className='lang-icons'><h2><SiJavascript /> <GrReactjs /> <FaNode /> <SiMongodb /></h2></div>
                            <p>Trivia game inspired by the famous TV show, 'Jeopardy', and made with the MERN architecture.</p>
                        </li>
                    </div>
                    <div className='right'>
                        <li>
                            <h3><strong>Family Feud Trivia Game</strong></h3>
                            <div className='lang-icons'><h2><SiJavascript /> <GrReactjs /> <FaNode /> <SiMongodb /></h2></div>
                            <p>'Family Feud' styled trivia game made with the MERN architecture. 'Fast Money' bonus rounds feature not yet included.</p>
                        </li>
                        <li id='github-intro'>
                            <h2><strong>And more to come...</strong></h2>
                            <p>...Because practice makes perfect!</p>
                            <Button variant="outline-light">View Complete Repository</Button>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}