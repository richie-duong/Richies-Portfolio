import { Link as Scroll } from 'react-scroll'
import { GiHamburgerMenu as Menu } from 'react-icons/gi'

export const Navbar = () => {

    const resposiveMenu =()=>{
        const navBar = document.querySelector(".nav-bar")
        navBar.classList.toggle("active")
    }

    return (
        <>  
            <header>
            <div className="logo">
                <Scroll to='home'><img src="richielogo.png" alt="Website Logo" /></Scroll>
            </div>
            <div className='hamburger' onClick={resposiveMenu}>
                <h1><Menu/></h1>
            </div>
            <nav className='nav-bar'>
                <ul>
                    <li><Scroll to="home" spy={true} smooth={true} offset={-30} duration={500}>Home</Scroll></li>
                    <li><Scroll to="about" spy={true} smooth={true} offset={-30} duration={500}>About</Scroll></li>
                    <li><Scroll to="skills" spy={true} smooth={true} offset={-30} duration={500}>Skills</Scroll></li>
                    <li><Scroll to="projects" spy={true} smooth={true} offset={-30} duration={500}>Projects</Scroll></li>
                    <li><Scroll to="contact" spy={true} smooth={true} offset={-30} duration={500}>Contact</Scroll></li>
                </ul>
            </nav>
            </header>
        </>
    )
}