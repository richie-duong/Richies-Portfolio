import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdHtml as HTML} from 'react-icons/md'
import { BsFiletypeCss as CSS} from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { FaNode } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiJest } from 'react-icons/si'

export const Skills = () => {
    return(
        <>
            <div className='section-container'>
                <h1><strong>SKILLS</strong></h1>
                <h4>Below are a combination of my technical skills and programming languages that I know:</h4>
                <div id="skills-list">
                    <p><SiJavascript /> <GrReactjs /> <FaNode /> <SiMysql /> <SiMongodb /> <SiJest/><br/>
                    <HTML/> <CSS/> <FaJava/> <FaPhp/></p>
                </div>
                <Button variant="outline-info">View Complete Resume</Button>
            </div>
        </>
    )
}