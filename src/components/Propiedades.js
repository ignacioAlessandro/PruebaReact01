import React from "react";

export default function Propiedades(props){
    return(
        <div>
            <h2>props.porDefecto</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.Nombre + " - " + props.objeto.Correo}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps ={
    porDefecto:"Las props",
}