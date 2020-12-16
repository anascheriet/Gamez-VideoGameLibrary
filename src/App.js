import { Home } from "./pages/Home";
import "./styles/app.scss"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {

  return (
    <div className="App">
      <Nav />
      <Router>
        <Route path={['/game/:id', '/']}>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
