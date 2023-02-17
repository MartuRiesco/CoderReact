import { useState } from 'react';
import './style.css'
import onAdd from '../ItemListContainer/ItemListContainer';
const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0);
    
    const decrease = () => {
        if(count>initial){
          setCount(count -1 );
        }
        
      };
    
      const increase = () => {
        if(count<stock){
          setCount(count + 1);}

};   return( <div>
<button key={count} onClick={decrease}>
   -
</button>
<span>{count}</span>
<button key={count >= 1} onClick={increase}>
   +
</button>
<button onClick={()=> onAdd(count) }>Agregar al carrito</button>
</div>)
}
export default ItemCount