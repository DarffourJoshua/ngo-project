const Card = ({title, description, btn, style}) => {
    return (
        <div className={style}>
            <h2>{title}</h2>
            <p>{description}</p>
            {btn && btn}
        </div>
    );
}

export default Card;