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
import SelectedNews from './components/SelectedNews';
import Finance from './components/Finance';
import Club from './components/Club';
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/library' exact component={Library} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          <Route path='/futbol' exact component={Futbol} />
          <Route path='/news/:id' exact component={SelectedNews} />
          <Route path='/finance' exact component={Finance} />
          {/* <Route path='/sidebar' exact component={Sidebar} /> */}
           {/* BORRAR */}
           <Route path='/club/:club' exact component={Club} />
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
