
const Button = ({text, icon, style}) => {
    return (
        <button className={style}>
            {text}
            {icon && icon}
        </button>
    );
}

export default Button;