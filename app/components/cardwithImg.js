'use client';

import Image from "next/image";

const CardWithImg = ( props ) => {
    const {title, figcaption, src, divStyle, imgStyle, w,h} = props;
    return (
        <div className={divStyle}>
            <div style={{position:"relative", width:'190px', height: '120px' }}>
                <Image 
                    src={src} 
                    alt={title} 
                    width={w} 
                    height={h} 
                    style={imgStyle}
                />
            </div>            
            <h3 className="text-bold">{title}</h3>
            <span className="">{figcaption}</span>
        </div>
    );
};

export default CardWithImg;