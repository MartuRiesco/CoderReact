import './style.css'

const Item = ({prod})=>{
    return(    <>
    <section className='detalle'>
        <img src={prod.img} alt={prod.name} className="imag ">
        </img>
        <p className="texto">Producto: {prod.name}</p>
        <p className="texto">Stock: {prod.stock}</p>
        <p className="texto"> Descripcion: {prod.description}</p>
        <span className="texto">
            Precio: ${prod.price}
        </span>

    </section>
    </>)
;

    
}
export default Item