import usservices from "../assets/usservices.png";

import Card from "react-bootstrap/Card";

function UsServices() {
  return (
    <div className="d-center">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={usservices} />
      </Card>
      <Card className="mt-3" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="color text-align ">
            Conoce Nuestros Servicios
          </Card.Title>
          <Card.Text className="text-align text-line">
            A continuación os presentamos los nuevos servicios totalmente
            gratuitos para los socios de @espaiautisme que ofrecemos a partir de
            ahora a las familias y cuidadores. Estamos muy contentos de poderos
            presentar a más profesionales que se han querido unir al equipo. En
            primer lugar os presentamos a:
            <div className="align-left text-line">
              <ul>
                <li>
                  <b>Magda Arnal: </b> nuestra trabajadora social que dará
                  orientación a las familias y cuidadores respecto a las ayudas
                  y recursos disponibles.
                </li>

                <li>
                  <b>Sandra Daudí:</b> nuestra psicóloga que acompañará
                  emocionalmente a las familias y cuidadores que lo necesiten,
                  así como les ofrecerá pautas y estrategias para la resolución
                  de conflictos o crisis en el entorno familiar.
                </li>

                <li>
                  <b>Paula Montón Ferrer:</b> de @alosbrazosdemamá: enseñará a
                  las familias a beneficiarse del porteo no solo en los momentos
                  de crisis sino como herramienta de regulación diaria que les
                  haga conectar con su hij@.
                </li>

                <li>
                  <b>Irene Socorro Gómez:</b> de @tulado.azul encargada de la
                  dirección del banco de respiro familiar donde se ofrecerá a
                  las familias actividades y momentos de desconexión de las
                  circunstancias qie rodean a nuestros familiares dentro del
                  espectro en el día a día.
                </li>

                <li>
                  <b>Noelira Freire:</b> colabora junto con Irene en la creación
                  del Banco de Respiro Familiar.
                </li>
              </ul>
              <div className="text-align text-line">
                Poco a poco vamos creciendo para acompañaros en nuestra
                particular montaña rusa y dar respuesta a vuestras inquietudes y
                necesidades. Recordad que para que os puedan atender
                personalmente cualquiera de nuestras profesionales es necesario
                cita previa, ya sea por mensaje directo a través de nuestro
                perfil de{" "}
                <a href="https://instagram.com/espaiautisme?igshid=YmMyMTA2M2Y=">
                  {" "}
                  @espaiautisme{" "}
                </a>{" "}
                o enviando un correo a <b>info@espaiautisme.org</b>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UsServices;
