import { useState, useRef } from "react";
import Input from "../input";
import Button from "../button";

export default function Form({ }){
    const alturaRef = useRef();
    const pesoRef = useRef();
    const [result, setResult] = useState(undefined);

    const handleSubmit = (e) => {
        e.preventDefault();
        const altura = parseFloat(alturaRef.current.value);
        const peso = parseFloat(pesoRef.current.value);
        const result  = peso / Math.pow(altura, 2);
        // const result  = peso / altura**2;
        setResult(result.toFixed(2));
    }
    const handleReset = () => {
        alturaRef.current.handleReset();
        pesoRef.current.handleReset();
        setResult(undefined);
    }
    return(
        <form className="flex items-center justify-center py-12 w-full max-w-80 bg-[#10403B] rounded-md md:px-10 md:w-auto md:max-w-none " onSubmit={(e) => handleSubmit(e)} onReset={() => handleReset()}>
            <fieldset className="flex flex-col items-center gap-6 max-w-60">
                <legend className="text-2xl font-bold text-white mb-8 text-center">
                    Calculadora de IMC
                </legend>
                <div className="w-full flex flex-col gap-4 md:flex-row">
                    <Input 
                        ref={alturaRef} 
                        id="altura" 
                        type="number" 
                        name="Altura(ex.: 1,82): " 
                        placeholder="Metros" 
                        labelColor="text-white"
                        w="w-full"
                    />
                    <Input 
                        ref={pesoRef} 
                        id="peso" 
                        type="number" 
                        name="Peso(ex.: 82,2): " 
                        placeholder="Quilos" 
                        labelColor="text-white"
                        w="w-full"
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
                        Seu IMC: {result}
                    </p>
                </div>
            </fieldset>
        </form>
    )
}