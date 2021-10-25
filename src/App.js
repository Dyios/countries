import { useEffect, useState } from 'react'
import './App.css';
import { getCountries } from './API/countries';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';

function App() {
  const [cachedData, setCachedData] = useState();
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") ?? "Dark");

  useEffect(() => {
    getCountries(setCachedData);
  }, [])

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path={"/"} exact>
            <Home data={cachedData} />
          </Route>
          {
            cachedData && cachedData.map(country =>
              <Route path={`/${country.name.common}`} exact key={country.name.common}>
                <Detail data={cachedData} country={country} />
              </Route>
            )
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
