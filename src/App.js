import { Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Loader from "react-loader-spinner";
import styles from "./components/Loader/Loader.module.css";

const HomePage = lazy(() =>
  import("./pages/HomePage" /*webpackChunkName: "home-page"*/)
);
const MoviePage = lazy(() =>
  import("./pages/MoviePage" /*webpackChunkName: "movie-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /*webpackChunkName: "movie-details-page"*/)
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage" /*webpackChunkName: "page-not-found"*/)
);

const App = () => (
  <>
    <Header />
    <Suspense
      fallback={
        <Loader
          className={styles.Loader}
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
        />
      }
    >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route>
          <Redirect to="/404" /> <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  </>
);

export default App;
