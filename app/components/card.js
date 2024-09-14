'use client';

const Card = ({description, btn, img, mainDev, minorDiv}) => {
    return (
        <div className={`relative overflow-hidden ${mainDev}`}>
            {img && img}
            <div className={` absolute w-full ${minorDiv}`}> 
                {description}
                {btn && btn}
            </div>
        </div>
    );
}

export default Card;