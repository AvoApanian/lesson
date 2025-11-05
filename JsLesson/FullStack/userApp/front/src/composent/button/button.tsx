import "./button.css"

interface BtnProprio {
    click:() => void,
    text:string
}

function Button ({click,text}:BtnProprio) {
    return (
        <>
            <button onClick={click}>
                {text}      
            </button> 
        </>
    );
}

export default Button