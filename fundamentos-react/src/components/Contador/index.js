import React from "react";
export class Contador extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            contador: props.inicial
        }
    }
    incrementar = () => {
        this.setState( state => ({
            contador: state.contador + 1
        }));
    }
    decrementar = () => {
        this.setState( state => ({
            contador: state.contador - 1
        }));
    }


    render() {
        return (
        <>
        <p>{this.state.contador}</p>
        <button onClick={this.incrementar}>+</button>
        <button onClick={this.decrementar}>-</button>
        </>
        );
    }
}
Contador.defaultProps = {
    inicial: 0
}