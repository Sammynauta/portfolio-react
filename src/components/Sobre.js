import React from 'react';
import '../styles/sobre.css';
import perfil from '../assets/perfil.svg';
import curriculo from '../assets/curriculo.pdf';
function Sobre() {
    return (
        <div className='sobre' id='sobre'>
            <img src={perfil} className='perfil-img' />
            <div className='text'>
                <h1>Sobre Mim</h1>
                <p>Me chamo Samuel Oliveira Diogo,tenho 25 anos e atualmente moro no Rio de Janeiro </p>
                <br />
                <p>Cursei meu técnico em informática pelo Senac RJ em 2019.
                    Onde acabei conhecendo mais sobre programação e desenvolvimento. Desde então me apaixonei por Front-End e venho estudando e procurando aprender cada vez mais nessa área.
                </p>
                <div className='botoes'>
                    <a className='button' href='https://www.linkedin.com/in/samuel-oliveira-diogo/'><i className="fab fa-linkedin"></i>Linkedin</a>
                    <a className='button' href={curriculo}><i className="fas fa-file-download"></i>Curriculo</a>
                </div>
            </div>
        </div>
    );
}

export default Sobre;