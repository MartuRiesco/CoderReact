import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( {Prod} ) => {
    return(
     <section className='detalle'>
        <img src={Prod.img} alt={Prod.name} className="imag ">
        </img>
        <p className="texto">Producto: {Prod.name}</p>
        <p className="texto">Stock: {Prod.stock}</p>
        <p className="texto"> Descripcion: {Prod.description}</p>
        <span className="texto">
            Precio: ${Prod.price}
        </span>
        <ItemCount initial={1} stock={5} />
    </section>
  
    
    )
    }
    export default ItemDetail