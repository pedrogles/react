import { Component, createRef } from "react";
import Input from "../input";
import Button from "../button";

export default class Form extends Component{
    constructor() {
        super()
        this.alturaRef = createRef();
        this.pesoRef = createRef();
        this.state = {
            result: undefined
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const altura = parseFloat(this.alturaRef.current.state.input);
        const peso = parseFloat(this.pesoRef.current.state.input);
        const result  = peso / Math.pow(altura, 2);
        // const result  = peso / altura**2;
        // this.setState({result: result.toFixed(2)});
        this.setState(
            () => ({result: result.toFixed(2)})
        )    
    }
    handleReset() {
        this.alturaRef.current.setState({input: ""}); 
        this.pesoRef.current.setState({input: ""});
        this.setState({result: undefined}); 
    }
    render() {
        return (
            <form className="flex items-center justify-center py-12 w-full max-w-80 bg-[#10403B] rounded-md md:px-10 md:w-auto md:max-w-none " onSubmit={(e) => this.handleSubmit(e)} onReset={() => this.handleReset()}>
                <fieldset className="flex flex-col items-center gap-6 max-w-60">
                    <legend className="text-2xl font-bold text-white mb-8 text-center">
                        Calculadora de IMC
                    </legend>
                    <div className="w-full flex flex-col gap-4 md:flex-row">
                        <Input 
                            ref={this.alturaRef} 
                            id="altura" 
                            type="number" 
                            name="Altura(ex.: 1,82): " 
                            placeholder="Metros" 
                            labelColor="text-white"
                            width="w-full"
                        />
                        <Input 
                            ref={this.pesoRef} 
                            id="peso" 
                            type="number" 
                            name="Peso(ex.: 82,2): " 
                            placeholder="Quilos" 
                            labelColor="text-white"
                            width="w-full"
                        />
                    </div>
                    <div className="flex gap-3 w-full">
                        <Button 
                            text="Limpar" 
                            textColor="text-gray-950" 
                            type="reset" 
                            bgColor="bg-[#BFBFBF]" 
                            width="w-full" 
                        />
                        <Button 
                            text="Calcular" 
                            textColor="text-white"
                            type="submit" 
                            bgColor="bg-[#127369]" 
                            width="w-full" 
                        />
                    </div>
                    <div className="w-full px-4 py-2 bg-[#BFBFBF] rounded-md">
                        <p className="text-xl text-gray-950">
                            Seu IMC: {this.state.result}
                        </p>
                    </div>
                </fieldset>
            </form>
        )
    }
}