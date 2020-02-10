import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/NavBar/Header'
import LoginForm from './pages/Login/LoginForm'
import Search from './pages/searchPage/SearchPage'
import SearchResults from './pages/SearchResults/SearchResults'
import Profile from './pages/profile/Profile'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ProtectedRoute} from "./common/ProtectedRoute/ProtectedRoute"

function App() {
  return (
  <React.Fragment>
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <ProtectedRoute exact path="/search" component={Search} />
        <ProtectedRoute exact path="/search-results" component={SearchResults} />
        <ProtectedRoute exact path="/profile" component={Profile} />

        <Route path="*" component={() => "404 NoT Found"} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
