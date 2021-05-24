import react from 'react';
import './App.css';
import data from './Samples/data.json';
import Notas from './Components/Notas.js';
//My try
import items from './Samples/nave.json'
import Navegation from './Components/navegation.js'

class App extends react.Component {
  state = {
    nave: items,
    notes: data
  }
  render() {
    return (
    <div>
      <Navegation navi = {this.state.nave}/>
      <Notas notes={this.state.notes} />
    </div>)
  }
}
export default App;
