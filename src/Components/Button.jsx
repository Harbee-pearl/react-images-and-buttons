import '../Styles/Button.css';


function Button({clickHandler, text}) {

    return (
        <button
        className="btns"
            onClick={clickHandler}
        >
            {text}
        </button>
    );
}

export default Button;