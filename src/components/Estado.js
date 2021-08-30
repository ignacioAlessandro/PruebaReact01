import React, {Component} from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            Contador: 0,
        }
    
    setInterval(() => {
        this.setState({
            Contador: this.state.Contador+1
        });
    }, 
    1000);

    }

    render(){
        return( 
        
            <div>
                <h3>El State</h3>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador} />
            </div>
        );
    }
}