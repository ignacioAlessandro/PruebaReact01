import './App.css';
import Componente from "./components/Componente"
import Propiedades from "./components/Propiedades"
import Estado from "./components/Estado"
import RenderizadoCondicional from "./components/RenderizadoCondicional"
import RenderizadoElementos from "./components/RenderizadoElementos"
import {EventosES6, EventosES7} from "./components/Eventos"
function App() {
  return (
    <div>
      <section>
        <div>
      <Componente  msg="hola q ase"/>
        </div>
      </section>
      <section>
        <Propiedades
          cadena="esto es una cadena" 
          numero = {20}
          booleano = {true}  
          arreglo = {[1,2,3]}
          objeto={{Nombre:"ignacio", Correo:"aleesandroignacio4@gmail.com"}}
        >
        </Propiedades>
        <hr/>
        <div>
          <Estado></Estado>
        </div>
        <section><RenderizadoCondicional/></section>
      </section>
      <div>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
      </div>
    </div>
  );
}

export default App;
