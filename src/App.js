import './App.css';
    import Componente from "./components/Componente"
import Propiedades from "./components/Propiedades"
import Estado from "./components/Estado"
function App() {
  return (
    <div>
      <section>

      <Componente msg="hola q ase"/>
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
        
      </section>
    </div>
  );
}

export default App;
