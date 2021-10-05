import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Perfil, Skills, Projects, NotFound } from './pages';
import './App.css';

const App = () => (
  <Switch>
    <Route path="/perfil" component={ Perfil } />
    <Route path="/skills" component={ Skills } />
    <Route path="/projects" component={ Projects } />
    <Route exact path="/" component={ Home } />
    <Route component={ NotFound } />
  </Switch>
);

export default App;
