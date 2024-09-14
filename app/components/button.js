
const Button = ({text, icon, style}) => {
    return (
        <button className={style}>
            <p>{text}</p>
            {icon && icon}
        </button>
    );
}

export default Button;