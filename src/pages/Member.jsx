import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Member() {
  const navigate = useNavigate()

 /*
  username,
  firstname,
  secondname,
  email,
  telephone*/


  return (
    <div>
      <h3>Hazte Socio</h3>

      <p>
        Queridas familias y comunidad: Como sabéis una asociación no se mantiene
        por sí sola, os necesitamos,necesitamos socios para hacer fuerza y poder
        responder ante las instituciones sobre las necesidades que tiene esta
        gran comunidad. Por tan solo 10€ al mes podéis formar parte de Espai
        Autisme Borriana y ayudarnos a seguir creciendo. Los socios tendrán
        derecho a disfrutar de manera gratuita de los servicios que actualmente
        ofrece (gabinete psicológico, trabajadora social, asesorías de porteo
        ergonómico y respiros familiares). Ya sabéis que junt@s somos más
        fuertes!! Hazte socio para que podamos ayudar a las personas dentro del
        espectro autista, a sus familiares y cuidadores.
      </p>
      <form>
        <label htmlFor="username">Nombre</label>
        <input type="text" />
      </form>
      <button>Hacerme Socio</button>
    </div>
  );
}

export default Member;
