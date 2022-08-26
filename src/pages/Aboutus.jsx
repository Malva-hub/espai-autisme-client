import aboutus from "../assets/aboutus.png";

import Card from "react-bootstrap/Card";

function Aboutus() {
  return (
    <div className="d-center">
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={aboutus} />
      </Card>
      <Card className="mt-3" style={{ width: "70rem" }}>
        <Card.Body>
          <Card.Title className="color text-align">Quiénes Somos</Card.Title>
          <Card.Text>
            ESPAI AUTISME BORRIANA nace de hacer visible nuestra diversidad, en
            concreto mostraros la realidad de las familias con personas dentro
            del Espectro Autista. Un espacio donde ustedes y las familias se
            podrán sentir arropados desde el momento que os dan el diagnóstico
            hasta vuestro día a día en las diferentes etapas que quedan por
            delante. Porque no olvidemos que los peques con autismo se
            convertirán en jóvenes y adultos a los que hay que seguir apoyando
            en sus diferentes desafíos a lo largo de su vida. Detrás de estos
            colores nos encontramos{" "}
            <b>Adriana, María, Paula, Judith e Irene </b>. Juntas desde la
            asociación queremos luchar por los derechos de las personas con
            autismo,dar cobertura a las diferentes situaciones que actualmente
            cojean en el ámbito educativo,social,sanitario… Atenderemos vuestras
            dudas y peticiones y se las haremos llegar a las instituciones
            correspondientes para empezar a cambiar las piedras que nos toca
            sortear por el camino. En definitiva queremos cambiar la mirada a
            esta condición que a los ojos de los demás es invisible.{" "}
            <b>Recordad, no estáis sol@s, junt@s somos más fuertes. </b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Aboutus;
