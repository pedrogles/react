import { useState, forwardRef, useImperativeHandle } from "react"

function Input({ id, name, type, placeholder, labelColor, width }, ref) {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e)
    }
    const handleReset = () => {
        setValue("");
    }
    useImperativeHandle(ref, () => ({
        value: value,
        handleReset: handleReset
    }))
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
                value={value}
                onChange={e => handleChange(e.target.value)}
                ref={ref}
                required
            />
        </div>
    )
}

export default forwardRef(Input);