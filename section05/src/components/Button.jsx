const Button = ({text, color, children}) => {

    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }
    
    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton} // 마우스를 올렸을 때
            style={{ color : color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

Button.defaultProps = {
    color: "black",
};

export default Button;