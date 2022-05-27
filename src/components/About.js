import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>Acerca de mi</h2>
                    <span className='line'></span>
                    <p>Tras años de estudio, he tomado la decisión de reorientar mi carrera profesional con el ánimo de continuar aprendiendo y, también, aportar toda mi experiencia adquirida. Considero que el cambio es un signo de capacidad de superación y, por ello, creo que siempre sería capaz de aportar valor en la empresa en la que me encuentre.
Mi objetivo principal es desarrollarme profesionalmente y evolucionar en mi sector, de modo que busco oportunidades que me permitan hacerlo, al tiempo que trataré de alinearse completamente con los objetivos de la empresa.
</p>
                    <p>Yo soy Cristian Camilo Zuluaga Arenas</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
