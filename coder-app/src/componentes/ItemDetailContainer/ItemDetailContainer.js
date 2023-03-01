import './style.css'
import detalles from '../../detalles.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import '../../datos.json'
import { useState, useEffect } from 'react'

function ItemDetailContainer(){
    const getData = new Promise ((response, reject) => {
        setTimeout(()=>{
            response(detalles)
        },3000)
        });
        const [Productos, setProductos]= useState([])
        useEffect(()=>{
            getData
            .then((response)=>setProductos(response))
            
        },[])
    return(<><section>
    <ItemDetail   Prod={Productos}/>
    </section>
    </>

    )
}
export default ItemDetailContainer