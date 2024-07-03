import { Component } from "react";

export default class Input extends Component{
    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        })   
    }
    render() {
        const { id, name, type, placeholder, labelColor, width } = this.props;
        return(
            <div className={`flex flex-col gap-2 ${width}`}>
                <label 
                    className={`text-lg ${labelColor}`}
                    htmlFor={id}>
                        {name}
                </label>
                <input 
                    className="p-2 border-2 border-gray-400 rounded-sm"
                    id={id} 
                    type={type} 
                    placeholder={placeholder} 
                    value={this.state.input}
                    onChange={e => this.handleChange(e)}
                    required
                />
            </div>
        )
    }
}