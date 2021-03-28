import logo from './logo.svg';
import './App.css';
import ItemsListContainer from './component/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, } from "react-router-dom";
import RouterApp from './routers/RouterApp';


function App() {
  
  return (
   
    <div className="App">
      <RouterApp/>
      <ItemsListContainer />
    </div>
    
  );
}

export default App;
