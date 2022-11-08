import React from "react";

function mialerta() {  
    alert("Sumado 1 al stock!!");
}

function mialerta2() {  
    alert("Restado 1 al stock!!");
} 

function mialerta3() {  
    alert("Paciente inscrito y reservado medicamento");
} 

class Fila extends React.Component {
    render(){
        return (
            <tr>
                <td scope="row">{this.props.nombre}</td>
                <td>{this.props.cantidad}</td>
                <td>{this.props.codigo}</td>
                <td><button type="submit" class="btn btn-success" onClick={mialerta}>Sumar</button></td>
                <td><button type="submit" class="btn btn-danger" onClick={mialerta2}>Caducar</button></td>
            </tr>
        )
    }
}

class FilaPre extends React.Component {
    render(){
        return (
            <tr>
                <td scope="row">{this.props.medico}</td>
                <td>{this.props.paciente}</td>
                <td>{this.props.medicamento}</td>
                <td>{this.props.cantidad}</td>
                <td><button type="submit" class="btn btn-success" onClick={mialerta3}>Listo</button></td>
            </tr>
        )
    }
}

export {Fila, FilaPre};