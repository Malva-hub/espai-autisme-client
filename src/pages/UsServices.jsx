import usservices from "../assets/usservices.png"

function UsServices() {
  return (
    <div>
      <h3>Conoce Nuestros Servicios</h3>
      <img src={usservices} alt="usservices" width={400} />
      <p>
        A continuación os presentamos los nuevos servicios totalmente gratuitos
        para los socios de @espaiautisme que ofrecemos a partir de ahora a las
        familias y cuidadores. Estamos muy contentos de poderos presentar a más
        profesionales que se han querido unir al equipo. En primer lugar os
        presentamos a:
        <ul>
          <li>
            Magda Arnal: nuestra trabajadora social que dará orientación a las
            familias y cuidadores respecto a las ayudas y recursos disponibles.
          </li>

          <li>
            Sandra Daudí: nuestra psicóloga que acompañará emocionalmente a las
            familias y cuidadores que lo necesiten, así como les ofrecerá pautas
            y estrategias para la resolución de conflictos o crisis en el
            entorno familiar.
          </li>

          <li>
            Paula Montón Ferrer: de @alosbrazosdemamá: enseñará a las familias a
            beneficiarse del porteo no solo en los momentos de crisis sino como
            herramienta de regulación diaria que les haga conectar con su hij@.
          </li>

          <li>
            Irene Socorro Gómez: de @tulado.azul encargada de la dirección del
            banco de respiro familiar donde se ofrecerá a las familias
            actividades y momentos de desconexión de las circunstancias qie
            rodean a nuestros familiares dentro del espectro en el día a día.
          </li>

          <li>
            Noelira Freire: colabora junto con Irene en la creación del Banco de
            Respiro Familiar.
          </li>
        </ul>
        Poco a poco vamos creciendo para acompañaros en nuestra particular
        montaña rusa y dar respuesta a vuestras inquietudes y necesidades.
        Recordad que para que os puedan atender personalmente cualquiera de
        nuestras profesionales es necesario cita previa, ya sea por mensaje
        directo a través de nuestro perfil de <a href="https://instagram.com/espaiautisme?igshid=YmMyMTA2M2Y="> @espaiautisme </a> o enviando
        un correo a <b>info@espaiautisme.org</b>
      </p>
    </div>
  );
}

export default UsServices;
