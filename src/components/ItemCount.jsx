import { useState } from "react";

const ItemCount = () =>{

    const [contador, setContador] = useState (0)
    
    const aumentarContador = () =>{
        console.log("aumentarContador")
        setContador (contador + 1)
    }

    const reducirContador = () =>{
        if (contador > 0 ) {
            setContador(contador - 1)
        }
    }

    console.log(contador)
    
    return(
        <div>

            <p>el contador va: {contador}</p>
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={reducirContador}>disminuir</button>
        </div>
        )
    }

export default ItemCount