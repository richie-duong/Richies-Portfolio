import { About } from '../components/About.js';
import { Projects } from '../components/Projects.js';

import { ContactForm } from "../components/Contact.js";
import { Skills } from "../components/Skills.js";
import { Home } from "../components/Home.js";

export const PagesLayout = () => {
    return (
        <>
        <div id="home">
            <Home />
        </div>
        <div id="about">
            <About />
        </div>
        <div id="skills">
            <Skills />
        </div>
        <div id="projects">
            <Projects />
        </div>
        <div id="contact">
            <ContactForm />
        </div>
        </>
    )
}