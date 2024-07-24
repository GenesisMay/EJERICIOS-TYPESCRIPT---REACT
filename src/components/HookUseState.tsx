import { useState } from "react"

export const HookUseState = () => {
    const [valorContador, setValorContador] = useState<number>(0);
    
    const cambiarContador = (numero: number) => {
        setValorContador(valorContador + numero);
    }
    
    return (
    <div>
        <h3><u>Hook UseState Acumulador de 5</u></h3>
        <p>Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir).</p>

        <h4>Valor del Acumulador: <small>{valorContador}</small></h4>
        
        <button className="btn btn-primary" 
        onClick={() => cambiarContador(5)}
        >
            +5
        </button>

        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <button className="btn btn-primary"
        onClick={() => cambiarContador(-5)}
        >
            -5
        </button>
    </div>
    )
}
