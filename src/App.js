import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TableComponent } from './components/TableComponent';
import { InputComponent } from './components/InputComponent';
import { HomeComponent } from './components/HomeComponent';
import stockData from './data/data'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={HomeComponent} exact/>
          <Route path='/table'>
            <TableComponent props={stockData}/>
          </Route>
          <Route path='/input' component={InputComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
