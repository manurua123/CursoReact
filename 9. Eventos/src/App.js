import './App.css';

function App() {
  const holamundo =(e)=> console.log(e.nativeEvent);
  const cambioInput =(e)=> console.log(e.target.value);
  return (
    <div className="App">
     <button onClick={holamundo}>ESTO ES UN BOTON</button>
     <input type='text' onchange={cambioInput}/>
    </div>
  );
}

export default App;
