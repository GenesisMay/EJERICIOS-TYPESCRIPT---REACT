import { AlumnoCalificacion } from "./components/AlumnoCalificacion";
import { Cuadrado } from "./components/Cuadrado";
import { Elementos } from './components/Elementos';
import { HookUseState } from "./components/HookUseState";
import { NuevoArreglo } from "./components/NuevoArreglo";

const App = () =>{
  return(
    <div>
      <h1>Ejercicios TypesSript - React</h1>
      <hr />
    <Cuadrado/> 
    <hr />
    <Elementos/>
    <hr />
    <NuevoArreglo/>
    <hr />
    <AlumnoCalificacion/>
    <hr />
    <HookUseState/> 
    <hr />
    </div>
  )
}

export default App;
