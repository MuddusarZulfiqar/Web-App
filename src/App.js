import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./modules/views/Home";
import Error from "./modules/views/Error";
import Nav from "./includes/Header";
import { useEffect } from "react";
import Product from "./modules/views/Product";
import Footer from "./includes/Footer";
import Search from "./modules/views/Search";
import Cart from "./modules/views/Cart";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
function App() {
  useEffect(() => {
    document.querySelectorAll('.slick-arrow').forEach((arrow)=>{
      console.log(arrow)
      arrow.textContent = ''
    })
  }, [])
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" render={(props)=><Product {...props}/>} exact />
          <Route path="/search" render={(props)=><Search {...props}/>} exact />
          <Route path="/cart" render={()=><Cart />} exact />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;