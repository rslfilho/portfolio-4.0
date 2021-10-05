import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Perfil, Skills, Projects, NotFound } from './pages';
import { Header, Footer } from './components'
import './App.css';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route path="/perfil" component={ Perfil } />
        <Route path="/skills" component={ Skills } />
        <Route path="/projects" component={ Projects } />
        <Route exact path="/" component={ Home } />
        <Route component={ NotFound } />
      </Switch>
    </main>
    <Footer />
  </div>
);

export default App;
