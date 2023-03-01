import './style.css'
import datos from '../../datos.json'

import '../../datos.json'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

 function ItemListContainer({greeting}){
    const getData = new Promise ((response, reject) => {
        setTimeout(()=>{
            response(datos)
        },3000)
        });
   
    const [Productos, setProductos]= useState([])
    useEffect(()=>{
        getData
        .then((response)=>setProductos(response))
        
    },[])

   return(<>
   <div className='items'>
{/* <h2 className='texto'>{greeting}</h2> */}
<section className='bienvenida'>
<ItemList   Prod={Productos}/>
</section>
</div>


</>
    )
 }
 export default ItemListContainer