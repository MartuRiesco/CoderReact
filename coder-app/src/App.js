import './App.css';
import './componentes/NavBar/NavBar'
import Menu from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import Cards from './componentes/Cards/Cards';


function App() {
  const onAdd = (cantidad) =>{
    console.log(`compraste ${cantidad} de items`)
  }
  
  return (
    <div className="App">
       <body>
      <header className="App-header">
        <Menu />
        <CartWidget/>
      </header>
     <main>
      <ItemListContainer greeting={'Bienvenidxs a TRES ESTRELLAS ⭐⭐⭐ '} />
      
      <Cards></Cards>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </main>
      <footer></footer>
      </body>
    </div>
   
  );
}

export default App;
