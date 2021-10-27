import './App.css';
import history from './history';
import {  Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx'
import Header from './components/Header';
import Library from './components/Library';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Futbol from './components/Futbol';
import Footer from './components/Footer';
import Finance from './components/Finance';
import Club from './components/Club';
import InsideTheNews from './components/InsideTheNews';
import Checkout from './components/Checkout';
import InsideForum from './components/InsideForum';
import Science from './components/sections/Science';
import Technology from './components/sections/Technology';
import Health from './components/sections/Health';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripePromise';
import ScrollToTopWhenNavigating from './utils/ScrollToTopWhenNavigating';
import AboutUs from './components/sections/AboutUs';
import JoinUs from './components/sections/JoinUs';
import NotFound from './utils/NotFound';

function App() {
  return (
    <Router history={history}>
      {/* <ScrollToTopWhenNavigating /> */}
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/library' exact component={Library} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          <Route path='/futbol' exact component={Futbol} />
          <Route path='/finance' exact component={Finance} />
          <Route path='/club/:club' exact component={Club} />
          <Route path='/insidenews' exact component={InsideTheNews} />
          <Route path='/checkout' exact component={Checkout}>
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>
          </Route>
          <Route path='/science' exact component={Science}/>
          <Route path='/technology' exact component={Technology}/>
          <Route path='/health' exact component={Health}/>
          <Route path='/forum' exact component={InsideForum} />
          <Route path='/aboutus' exact component={AboutUs} />
          <Route path='/joinus' exact component={JoinUs} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
