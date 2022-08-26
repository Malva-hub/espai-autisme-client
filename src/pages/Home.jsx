import React, { useState } from "react";
//import Button from 'react-bootstrap/Button';

//import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from "react-bootstrap/Carousel";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import bg from "../assets/bg.png";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div >
      <div className="bg-img">
        <img src={bg} alt="bg" className="bg-home" />
      </div>
      <div className="home" >
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="img-carousel" src={image2} alt="First slide" />
            <Carousel.Caption>
              <h3>Fiesta de las Familias Diversas</h3>
              <p>
                Este día fue muy especial para nosotras
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="img-carousel" src={image1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Presentación de la Asociación</h3>
              <p>Nuestra presentación estuvimos unidas en este proyecto</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="img-carousel" src={image3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Associació Espai Autisme</h3>
              <p>Agradecemos mucho la asistencia de todos los asistentes</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="img-carousel" src={image4} alt="Third slide" />

            <Carousel.Caption>
              <h3>Fiesta Familias Diversas</h3>
              <p>Momentos especiales junto a nuestros familiares</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* <ButtonGroup aria-label="Basic example">
      <Button variant="secondary"> Quiénes Somos</Button>
      <Button variant="secondary"> Qué es el Autismo</Button>
      <Button variant="secondary"> Nuestros Servicios</Button>
      <Button variant="secondary">Programación de Eventos</Button>
      <Button variant="secondary">Noticias EAB</Button>
      <Button variant="secondary">Transparencia EAB</Button>
      <Button variant="secondary">Hazte Socio</Button>
      <Button variant="secondary">Colabora con nosotros</Button>
      <Button variant="secondary">Galería de Imágenes</Button>
    </ButtonGroup> */}
      </div>
    </div>
  );
}

export default Home;
