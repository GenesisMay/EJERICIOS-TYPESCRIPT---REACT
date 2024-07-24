import React from 'react'

const elementoSumar = (arreglo: number[]): number[] => {
    return arreglo.map(elements => elements / 5);
}

export const NuevoArreglo = () => {
    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const dividido = elementoSumar(arreglo)

    return (
    <div>
        <h3><u>Los Valores del Arreglo Dividir para 5</u></h3>
        <p>Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.</p>  

        <p>Arreglo: {arreglo.join(', ')}</p>
        <p>Dividido para 5: {dividido.join(', ')}</p>
    </div>
)
}
