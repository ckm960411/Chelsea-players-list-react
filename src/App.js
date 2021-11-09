import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Players from './routes/Players';
import PlayersDetail from './routes/PlayersDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/players/:id" component={PlayersDetail} />
          <Route path="/players" component={Players} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
    
  );
}

export default App;
