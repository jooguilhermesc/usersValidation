import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Consulta from "./Pages/Consulta";
import Validacao from "./Pages/Validacao";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/validacao">
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
