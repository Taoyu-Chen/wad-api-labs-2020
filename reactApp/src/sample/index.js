import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "./pages";
import MovieProvider from "./moviesContext";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext";

const App = () => {
  return (
    <BrowserRouter>
      <MovieProvider>
        <AuthProvider>
          <AuthHeader />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/public" component={PublicPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />,
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/movies" component={Movies} />
            <PrivateRoute path="/profile" component={Profile} />
            <Redirect from="*" to="/" />
          </Switch>
        </AuthProvider>
      </MovieProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
