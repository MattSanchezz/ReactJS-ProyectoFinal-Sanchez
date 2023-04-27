import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const nombre = "React";
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Hola amigo Rojo!!" />
    </>

  );
}

export default App;
