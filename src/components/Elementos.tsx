import React from 'react'

const elementoSumar = (arreglo: number[]): number => {
    let sumar=0;

    arreglo.forEach(element => {
        sumar += element;
    });

    return sumar;
}

export const Elementos = () => {
    const arreglo = [3, 5, 9, 12];
    const suma = elementoSumar(arreglo)

    return (
    <div>
        <h3><u>Sumar los Elementos del Arreglo</u></h3>
        <p>Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo.</p>
        
        <p>Arreglo: {arreglo.join(', ')} </p>
        <p>Suma de los elementos: {suma} </p>
    </div>
)
}
