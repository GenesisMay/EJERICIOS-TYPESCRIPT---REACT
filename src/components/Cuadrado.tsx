import React from 'react'

const cuadradoArea=(lados: number): number => {
    return lados * lados;
}

export const Cuadrado = () => {
    const lados= 4;
    const area= cuadradoArea(lados)
    
    return (
    <div>
        <h3><u>Calcular Área del Cuadrado</u></h3>
        <p>	Crear una función con parámetros que permita calcular el área de un cuadrado.</p>
        
        <p>Lado: {lados} </p>
        <p>Area: {area} </p>
    </div>
    )
}
