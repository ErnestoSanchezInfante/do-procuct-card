# ESI-Product-Card

Este es un paquete de despliegue en NPM

### Ernesto Sanchez

## Ejemplo

```
import {ProductCard,ProductImage,ProductTitle,} from 'esi-product-card
```

```
<ProductCard 
    key={ product.id }
    product={ product } 
    initialValues={{
        count: 6,
        //maxCount: 10
    }}
>

    {
        ( { reset, count, isMaxCountReached, maxCount, increaseBy } ) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
        )
    }    

</ProductCard>

```