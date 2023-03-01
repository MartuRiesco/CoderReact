import ItemD from '../ItemD/ItemD'

const ItemDetail = ( {Prod} ) => {
    return(
        Prod.map((prod)=> <ItemD key={prod.id} prod={prod}/>)
    
    )
    }
    export default ItemDetail