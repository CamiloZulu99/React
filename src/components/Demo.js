import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Mis estudios</p>
                    <p>Ingeniero en sistemas y telecomunicaciones</p>
                    <p>Universidad de Manizales, Colombia</p>                   
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/watch?v=WLuXbqrQqmI' title='Youtube video UM' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>

                <div className='col-1'>
                    <p>Mis estudios</p>
                    <p>Dibujo Arquitectonico</p>
                    <p>Sena</p>                   
                </div>

                <div className='col-1'>
                    <p>Software Utilizados</p>
                    <ul>
                     <li>Arduino</li>
                     <li>Visual Studio code</li>
                     <li>Maple 2019</li>
                     

                     <div className='col-1'>
                   
                    <a href="https://github.com/CamiloZulu99" target="_blank">Visita mis repositorios de GitLab</a>
                    <a href="https://gitlab.com/CamiloZulu99" target="_blank">Visita mis repositorios de GitHub</a>
                                      
                </div>

                     
</ul>                  
                </div>
            </div>
        </div>

        
    )
}

export default Demo
