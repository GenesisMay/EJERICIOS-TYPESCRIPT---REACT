import React from 'react'

interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number[];
}

const sumarCalificaciones = (notas: number[]):number =>{
    let suma=0;

    notas.forEach(element => {
        suma += element;
    });

    return suma;
}

const promedioCalificaciones = (total:number[]):number =>{
    const sumar= sumarCalificaciones(total);
    return total.length ? sumar / total.length:0;
};

export const AlumnoCalificacion = () => {
    const alumnos: Alumno[] = [
        {
            nombre: 'Viviana',
            edad: 19,
            calificacion: [10, 9, 10, 9, 2],
        },

        {
            nombre:'Wendy',
            edad: 20,
            calificacion: [9, 1, 10, 10, 4],
        },

        {
            nombre: 'Gerson',
            edad: 18,
            calificacion: [10, 9, 10, 10, 8],
        }

    ];

    const datosAlumnos = alumnos.map(Alumno => ({
        Alumno, Promedio: promedioCalificaciones(Alumno.calificacion)
    }));

    return (
    <div>
        <h3><u>Propiedades de los Alumnos y su Promedio</u></h3>
        <p>Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.</p>

        <pre>
            {JSON.stringify(datosAlumnos, null, 3)} 
        </pre>
    </div>
    )
}
