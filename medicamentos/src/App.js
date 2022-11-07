import './App.css';
import React from 'react';
import Medicamentos from './containers/Medicamentos';
import Home from './containers/Home';
import Agregar from './containers/agregar';
import Preinscripcion from './containers/Preinscripcion';
import Entrega from './containers/Entrega';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreEntrega from './containers/agregarPre';
import Recetas from './containers/recetas';

class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/Medicamentos" component={Medicamentos}/>
          <Route exact path="/agregar" component={Agregar}/>
          <Route exact path="/Preinscripcion" component={Preinscripcion}/>
          <Route exact path="/agregarEntrega" component={Entrega}/>
          <Route exact path="/agregarPre" component={PreEntrega}/>
          <Route exact path="/Recetas" component={Recetas}/>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
