import React from 'react';
import '../styles/contato.css';

export function Footer() {
    return (
        <div className='footer' id='contato'>
            <span>Pode mandar um oi, se quiser entrar em contato comigo.</span>
            <a className='email'><i class="fas fa-envelope-square"></i>samueloliveira@diogogmail.com</a>
            <div className='social'>
                <a href="https://api.whatsapp.com/send?phone=5521999090872" className='media'><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/sam_diogo/" className='media'><i className="fab fa-instagram"></i></a>
            </div>
            <p>Desenvolvido por Samuel Diogo <i class="fas fa-star"></i></p>
        </div>
    )
}

export default Footer;