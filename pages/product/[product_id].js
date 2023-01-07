
import { useRouter } from "next/router";

const Producto = () => {

    const route = useRouter();
    const { product_id } = route.query;
    
    return( 
        <>
            <div>
                <h1>Producto {product_id}</h1>
            </div>
        </>
        )
    }

export default Producto;