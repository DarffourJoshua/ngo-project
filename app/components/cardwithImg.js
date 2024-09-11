import Image from "next/image";

const CardWithImg = ({ title, figcaption, src, style, imgStyle }) => {
    return (
        <div className={style}>
            <Image src={src} alt={title} width={300} height={200} className={imgStyle}/>
            <h2>{title}</h2>
            <span>{figcaption}</span>
        </div>
    );
};

export default CardWithImg;