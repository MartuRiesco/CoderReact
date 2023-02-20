import './style.css'
import datos from '../../datos.json'
import Cards from '../Cards/Cards'

 function ItemListContainer({greeting}){
    return(<>
<h2>{greeting}</h2>
 <Cards img={datos[0].img} name={datos[0].name} description={datos[0].description} price={datos[0].price} stock={datos[0].stock}
 /></>
    )
 }
 export default ItemListContainer