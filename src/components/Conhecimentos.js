import React from 'react';
import { SkillData } from '../database/SkillData';
import '../styles/conhecimentos.css';

function Conhecimentos() {
    return (
        <div className='skills' id='skills'>
            <h1>Principais Conhecimentos</h1>
            <div className='Cards'>
                {SkillData.map((props) => {
                    return (
                        <div className='card'>
                            <a className='img-icon'>{props.image}</a>
                            <span>{props.name}</span>
                            <p>{props.tempo}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Conhecimentos;