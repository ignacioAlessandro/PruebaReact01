import React, {Component} from "react";

function login(){
    return(
        <div>
            <h3>
                login
            </h3>
        </div>
    );
}

function logout(){
    return(
        <div>
            <h3>
                logout
            </h3>
        </div>
    );
}

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session:true,
        };
    }
    render(){
        return(
            <div>
                <h2>Render Condicional</h2>
                {this.state.session?<login/>:<logout/>}
            </div>
        );
    }    
}