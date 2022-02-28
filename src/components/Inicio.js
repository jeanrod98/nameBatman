import React, { useEffect } from "react";
import styled from "styled-components";
import imagen from '../assets/batman1.jpg';
import html2canvas from 'html2canvas';
import {useNavigate} from 'react-router-dom';

function Inicio() {
    const navigate = useNavigate();

    const nombreUsuario = localStorage.getItem('nameUser');

    //Funcion para capturar el div y descargar en imagen
    // const TestButton = () => {
    //     html2canvas(document.getElementById('conetenedor-texto'))
    //     .then(canvas => {
    //     //   canvas.toDataURL()
    //       let enlace = document.createElement('a')
    //   enlace.download = `${nombreUsuario}.jpg`
    //   // Convertir la imagen a Base64
    //   enlace.href = canvas.toDataURL()
    //   // Hacer click en él
    //   enlace.click()
    // });
// }
//Ir atras
const atras = (e) => {
e.preventDefault();
navigate('/nameBatman');
}
  return (
    <Contenedor>
        <Atras>

            <ion-icon onClick={atras} name="arrow-back-circle-outline"></ion-icon>
        </Atras>
        <ContenedorTexto id="conetenedor-texto">

            <Texto>{nombreUsuario}</Texto>
        </ContenedorTexto>
        {/* <button onClick={TestButton}>Download</button> */}
      {/* <Canvas id="myCanvas">Hola</Canvas> */}
    </Contenedor>
  );
}

export default Inicio;
const Contenedor = styled.div`
    background: #000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    ion-icon{
        color: #fff;
        font-size: 42px;
    }
`;
const Atras = styled.div`
    justify-content: felx-start;
    // background: red;  
    width: 80%; 
    height: 80px;
    ion-icon{
        color: #fff;
        font-size: 42px;
    }
    ion-icon:hover{
        color: red;
        cursor: pointer;
    }
`;

const ContenedorTexto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    width: 80%;
    height: 300px;
    border-radius: 20px;

    @media screen and (max-width: 800px){
        height: 100px;
    }
`;
const Texto = styled.h1`
// @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');
    // font-family: 'Anton', sans-serif;
    font-family: 'League Spartan', sans-serif;
    width: 100%;
    
    
    margin: 0;
    font-size: 70px;
    color: transparent; //#000
    text-align: center;
    text-transform: uppercase;
    background-image: url(${imagen});
    background-size: cover;
    background-position-y: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

@media screen and (max-width: 800px){
    font-size: 26px;
}
`;