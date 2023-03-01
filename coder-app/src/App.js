import './App.css';
import './componentes/NavBar/NavBar'
import Menu from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './componentes/CartWidget/CartWidget'





function App() {
  const onAdd = (cantidad) =>{
    console.log(`compraste ${cantidad} de items`)
  }
  
  return (
    <div className="App">
       <body>
        <div className='grilla'>
      <header className="App-header">
        <div id="myDIV">
  <div className="item1"><img  className='imagen' src={process.env.PUBLIC_URL + '/img/tresestrellas.png'}/></div>
  <div className="item2"><h1 className='item22'>TRES ESTRELLAS</h1></div>
  <div className="item3"><CartWidget/></div> 
  <div className="item4"><Menu className="menu" /></div>  
</div>

      <div className='swiper'>
      <marquee behavior="" direction="row">
      <div className="swiper-slide"> BIENVENIDXS A TRES ESTRELLAS ⭐⭐⭐   LA TIENDA DE LOS CAMPEONES DEL MUNDO 😎🏆-------  ENCONTRÁ TODO LO QUE NECESITAS PARA JUGAR A LA PELOTA⚽ ------- ENVÍOS A TODO EL PAÍS ------- SALE %15 OFF! </div>
      </marquee> 
      </div>
      </header>
     <main >
      <ItemListContainer greeting={'Bienvenidxs a TRES ESTRELLAS ⭐⭐⭐ '} />
      <ItemDetailContainer/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </main>
      <footer>
        <section  className='pagos'>
      <img src={process.env.PUBLIC_URL + '/img/iconoAmex.png'} alt='american express' className='pago'></img>
      <img src={process.env.PUBLIC_URL + '/img/iconoMASTER.png'} alt='mastercard' className='pago'></img>
      <img src={process.env.PUBLIC_URL + '/img/iconoMP.png'} alt='mercado pago' className='pago'></img>
      <img src={process.env.PUBLIC_URL + '/img/iconoVISA.png'} alt='visa' className='pago'></img>
      <h2 className='fut'>Site by Martina riesco</h2>
      </section>

      </footer>
      </div>
      </body>
    </div>
   
  );
}

export default App;
