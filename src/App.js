import Home from "./Home";
import Dashboard from "./Dashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Route, Link, Switch } from "react-router-dom";
import Footer from "./Footer";
import logo from "./logo1-removebg-preview.png";

function App() {

  return (
    <>
      <div className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '50px', marginLeft:'50px' }} className="logo" />
            <Link to="/Home" style={{ textDecoration: 'none', color: '#fff', fontSize: '25px', fontWeight: 'bold',marginLeft:'100px'}}>Home</Link>
            <Link to="/Dashboard" style={{ marginLeft: '40px', textDecoration: 'none', color: '#fff', fontSize: '25px', fontWeight: 'bold' }}>Movies</Link>
          </div>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
