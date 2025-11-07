import './Navbar.css'
import photo from '../assets/images/logo.png';

function Navbar() {
    return (
        <header>
            <img src={photo} alt="Shadotech" />
            <nav>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar