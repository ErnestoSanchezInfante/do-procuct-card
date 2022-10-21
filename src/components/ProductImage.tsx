import React,{ useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props{
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

//Iniciio de compund component pattern
export const ProductImage = ({ img, className, style}: Props) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string; //let porque se va a cambiar el valor

    if( img ){
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }

    return(
        <img 
            className={  `${styles.productImg} ${className}` } 
            src={ imgToShow } 
            style={ style }
            alt="Product" 
        /> 
    )
}