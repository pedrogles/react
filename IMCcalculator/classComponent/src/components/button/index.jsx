import { Component } from "react";

export default class Button extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        const { type, onClick, bgColor, width, text, textColor } = this.props;
        return(
            <button 
                type={type}
                onClick={onClick} 
                className={`${bgColor} ${textColor} rounded-md ${width} py-2`}>
                    {text}
            </button>
        )
    }
}