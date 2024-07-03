export default function Button({ text, textColor, type, onClick, bgColor, width}){
    return(
        <button 
            type={type}
            onClick={onClick} 
            className={`${bgColor} ${textColor} rounded-md ${width} py-2`}>
                {text}
        </button>
    )
}