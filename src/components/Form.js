import React, { useState } from 'react'
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'

function Form() {
    const navigate = useNavigate();

    // Estado para guardar el nombre
    const [nombre, setNombre] = useState();
    //llenar nombre en el estado
    

    const goToPage = (e) => {
        e.preventDefault();
        
        if(nombre === '' || nombre == undefined ){
            alert('NOMBRE INCORRECTO, vuelva a intentar!')
        }else{

            localStorage.setItem('nameUser', nombre);
            // console.log('correcto');
            navigate('/nameBatman/success');
        }
    }
  return (
    <ContenedorForm>
        <InputDiv>
            <InputText placeholder='John Doe' autoFocus type='text' onChange={e => setNombre(e.target.value)}>
            </InputText>
            <label>* Ingrese un nombre y un apellido.</label>
        </InputDiv>
        <ContenedorBoton>

            <BotonGenerar onClick={goToPage}>
                Generar Nombre
            </BotonGenerar>
        </ContenedorBoton>

    </ContenedorForm>
  )
}

export default Form

const ContenedorForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    min-height: 100vh;
    flex-direction: column;

    @media screen and (max-width: 800px){
        width: 100%;
        min-height: 100vh;

    }
`;

const ContenedorBoton = styled.div`
    margin-top: 30px;
       
`;
const BotonGenerar = styled.button`
    width: 200px;
    height: 40px;
    background: transparent;
    color: #cd0a0e;
    text-transform: uppercase;
    border: 1px solid white;
    border-radius: 5px;
    font-weight: bold;

    &:hover{
        background: #fff;
        color: #cd0a0e;
        border: 0;
        cursor: pointer;
    }
   
`;
const InputDiv = styled.div`
// width: 100%;
    display: flex;
    flex-direction: column;
    label{
        margin-top: 5px;
        color: #fff;
        font-size: 12px;
    }

   
       
`;
const InputText = styled.input`
    color: #cd0a0e;
    width: 450px;
    height: 50px;
    font-size: 34px;
    outline: none;
    background: transparent;
    border: 0;
    border-bottom: 1px solid red;
    text-transform: uppercase;
    text-align: center;
    
    @media screen and (max-width: 800px){
        width: 250px;
        height: 40px;
        font-size: 20px;
        
    }

`;