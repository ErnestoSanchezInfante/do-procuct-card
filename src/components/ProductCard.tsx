import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';

import React,{ createContext } from 'react';
import { ProductContextProps, Product, onChangeArgs, IntialValues, ProductCardHandlers } from '../interfaces/interfaces';



//esto es para compartir informacion entre padres e hijos
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } =  ProductContext;

export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: IntialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProducts( {onChange, product, value, initialValues } );

  return (
        <Provider value ={{
            counter,
            increaseBy, 
            maxCount,
            product
        }}>

            <div 
                className={ `${styles.productCard} ${ className }` }
                style={ style }
            >

                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    }) 
                }
                
            </div>
        </Provider>
  )
}

