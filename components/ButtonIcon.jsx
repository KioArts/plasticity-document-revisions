import React from "react";
import Image from "next/image";
import styles from "/styles/ButtonIcon.module.css";

function ButtonImage({ type, double = false }) {
    const isSvg = type.endsWith(".svg");
    const baseName = isSvg ? type : `${type}.png`;
    const imagePath = `/img/${baseName}`;

    const size = double ? { width: 68, height: 32 } : { width: 32, height: 32 };

    return (
        <span className={styles.buttonIcon}>
            {isSvg ? (
                <img src={imagePath} alt={type} width={size.width} height={size.height} />
            ) : (
                <Image src={imagePath} alt={type} {...size} />
            )}
        </span>
    );
}

export default ButtonImage;
