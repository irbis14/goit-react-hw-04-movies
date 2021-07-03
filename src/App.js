import { Route, Switch, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movie search</NavLink>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/reviews" component={MovieDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
