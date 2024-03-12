import React from "react";
import style from './style.css';
import { Link } from "gatsby"
import Linkedin from '../../../images/l.png';
import Insta from '../../../images/i.png';
import Whatsapp from '../../../images/w.png';
import { StaticImage } from "gatsby-plugin-image";
import Seta from '../../../images/seta.png';


const Navbar = () => {
    return (
        <main className="Navbar_Full">
            <Link to="/"><StaticImage className="logo" src="../../../images/logofc.jpeg" alt="Foto da logo da empresa" /></Link>

            <div className="Navbar_Full_Pages">
                <ul>
                    <li>
                        <Link className="Links_Page" to="/">Ínicio</Link>
                    </li>
                    <li>
                        <Link className="Links_Page" to="/about">Sobre Nós</Link>
                    </li>
                    <li id="Dropdown">
                        <Link className="Links_Page" to="/service">Soluções <img className="iconSeta" src={Seta} alt="img seta" /> </Link>
                        <div id="Dropdown_Menu">
                            <Link className="Dropdown_Link" to="/telefone">Via Telefone</Link>
                            <Link className="Dropdown_Link" to="/whatsapp">Via WhatsApp</Link>
                            <Link className="Dropdown_Link" to="/email">Gestão de E-mails</Link>
                            <Link className="Dropdown_Link" to="/agenda">Agendamento</Link>
                        </div>
                    </li>
                    <li>
                        <Link className="Links_Page" to="/contact">Contatos</Link>
                    </li>
                </ul>
            </div>


            <div className="Navbar_Full_SocialMedia">
                <a href="https://www.linkedin.com/in/matheus-nascimento-106a00226/" target="_blank"> <img className="icon" src={Linkedin} alt="img linkedin" /></a>
                <a href="https://www.linkedin.com/in/matheus-nascimento-106a00226/" target="_blank"> <img className="icon" src={Insta} alt="img instagram" /></a>
                <a href="https://www.linkedin.com/in/matheus-nascimento-106a00226/" target="_blank"> <img className="icon" src={Whatsapp} alt="img whatsapp" /></a>
            </div>
        </main>
    )
}

export default Navbar;