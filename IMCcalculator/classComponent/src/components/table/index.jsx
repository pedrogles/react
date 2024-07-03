import { Component } from "react";

export default class Table extends Component{
    render() {
        const table = {
            header: ["IMC", "Classificação", "Obesidade(Grau)"],
            body: {
                row1: ["Menor que 18,5", "Magreza",	0],
                row2: ["Entre 18,5 e 24,9",	"Normal", 0],
                row3: ["Entre 25,0 e 29,9", "Sobrepeso", 1],
                row4: ["Entre 30,0 e 39,9", "Obesidade", 2],
                row5: ["Maior que 40,0", "Obesidade Grave",	3]
            }
        }
        return(
            <table className="border-y-2 border-black text-center my-12">
                <caption className="text-2xl mb-6">Interpretação do IMC</caption>
                <thead>
                    <tr>
                        {table.header.map((header, id) => {
                            return(
                                <th key={id} className="border-b-2 text-white bg-[#10403B] border-black p-2">{header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {table.body.row1.map((body, id) => {
                            return(
                                <td key={id} className="border-b-2 border-black p-2">{body}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        {table.body.row2.map((body, id) => {
                            return(
                                <td key={id} className="border-b-2 border-black p-2">{body}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        {table.body.row3.map((body, id) => {
                            return(
                                <td key={id} className="border-b-2 border-black p-2">{body}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        {table.body.row4.map((body, id) => {
                            return(
                                <td key={id} className="border-b-2 border-black p-2">{body}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        {table.body.row5.map((body, id) => {
                            return(
                                <td key={id} className="border-b-2 border-black p-2">{body}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        )
    }
}