import "./button.css"

interface ButtonProps {
    click:() => void;
}

function Button ({click}:ButtonProps) {
    return (
        <>
            <button onClick={click}>
                Enter
            </button>
        </>
    );
}

export default Button