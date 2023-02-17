import './App.css';
import './componentes/NavBar/NavBar'
import Menu from './componentes/NavBar/NavBar';
import CartWidget from './componentes/CartWidget/CartWidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import onAdd from './componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
       <body>
      <header className="App-header">
        <Menu />
        <CartWidget/>
      </header>
     <main>
      <ItemListContainer greeting={'Bienvenidxs a FUTBOLFUTBOLFUTBOL '} />
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </main>
      <footer></footer>
      </body>
    </div>
   
  );
}

export default App;
