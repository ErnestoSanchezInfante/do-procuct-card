import { useEffect, useState, useRef } from 'react';
import { onChangeArgs, Product, IntialValues } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product;
    onChange?:( args: onChangeArgs ) => void;
    value?:number;
    initialValues?: IntialValues;

}

export const useProducts = ( { onChange, product, value= 0, initialValues }: useProductArgs ) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef( false );

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0 );

        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter( newValue )

        onChange && onChange({ count: newValue, product }); //El operador && no se ejecuta si onChange es falso
    }

    const reset = () => {
        setCounter(initialValues?.count || value )
    }

    useEffect(() => {
        if ( !isMounted.current ) return;

        setCounter( value );
    },[ value ] )

    useEffect( () => {
        isMounted.current = true;
    }, [] )

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        
        increaseBy,
        reset
    }

}
