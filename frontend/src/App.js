import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Consulta from "./Pages/Consulta";
import Validacao from "./Pages/Validacao";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro de Novo Usuário</Link>
            </li>
            <li>
              <Link to="/validacao">Validação</Link>
            </li>
            <li>
              <Link to="/consulta">Consulta</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route exact path="/validacao">
            <Validacao />
          </Route>
          <Route exact path="/consulta">
            <Consulta />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
