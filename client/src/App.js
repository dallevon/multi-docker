import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Fib from "./Fib";
import OtherPage from "./OtherPage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Multidocker Fib calculator</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </nav>
        </header>
        <main className="App-main">
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </main>
      </div>
    </Router>
  );
}

export default App;
