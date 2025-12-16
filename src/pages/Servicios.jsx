import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <>
    <h1>Servicios</h1>
            <hr />
    <div style={{ width: '85%', margin: '0 auto' }}>

    <p><strong>Somos GameAlarc</strong>, un equipo de apasionados por la cultura gamer que nació con una misión clara: conectar a los jugadores con las mejores experiencias digitales y físicas del mercado. No somos solo una tienda, somos un punto de encuentro para quienes ven en los videojuegos un arte, un deporte y una forma de vida.</p>        
    <ul>
            <li><strong>Asesoría Gamer:</strong> ¿No sabes qué jugar? Nuestro equipo te recomienda títulos basados en tus mecánicas favoritas.</li>
            <li><strong>Soporte Técnico:</strong> Te ayudamos con la instalación y configuración de tus juegos para que tu única preocupación sea ganar.</li>
            <li><strong>Comunidad Activa:</strong> Acceso a preventas exclusivas y noticias del mundo del hardware y software.</li>
    </ul>
    <Link to="/"><button>Volver al Inicio</button></Link>
    </div>
    </>
  )
}

export default Servicios