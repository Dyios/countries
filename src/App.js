import {useEffect, useState} from 'react'
import './App.css';
import { getCountries } from './API/countries';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';

function App() {
  const [cachedData, setCachedData] = useState();
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") ?? "Dark");

  useEffect(()=>{
    getCountries(setCachedData);
  },[])

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path="/" exact>
            <Home data={cachedData} />
          </Route>
          <Route path="/:country" exact>
            <Detail data={cachedData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
