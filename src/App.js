import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Headphones, Speakers, Earphones, Cart } from './pages';
import { Navbar, Footer } from './components';

const App = () => {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Headphones exact path="/headphones" component={Headphones} />
                <Speakers exact path="/speakers" component={Speakers} />
                <Earphones exact path="/earphones" component={Earphones} />
                <Cart exact path="/cart" component={Cart} />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;