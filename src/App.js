import { Home } from "./pages/Home";
import "./styles/app.scss"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Route path={['/game/:id', '/']}>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
