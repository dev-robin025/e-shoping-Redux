import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import CartProduct from "./components/CartProduct";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/product/:id' component={ProductDetail} />
        <Route path='/cartProduct' component={CartProduct} />
        <Route>404 NOT FOUND.</Route>
      </Switch>
    </Router>
  );
}

export default App;
