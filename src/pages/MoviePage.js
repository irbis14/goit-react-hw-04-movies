import { Component } from "react";
import Searchbar from "../components/SearchForm/";
import { fetchMovieByName } from "../services/moviesApi";
import { windowsScrolling } from "../utils";

import MovieList from "../components/MovieList";
import MovieItem from "../components/MovieItem";
import Loader from "react-loader-spinner";

import styles from "../components/Loader/Loader.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class MoviePage extends Component {
  state = {
    searchQuery: "",
    movies: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovieByName();
    }
  }

  onSearchQuery = (query) => {
    this.setState({ movies: [], searchQuery: query, page: 1, error: null });
  };

  fetchMovieByName = () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };

    this.setState({ isLoading: true });

    fetchMovieByName(options)
      .then((fetchedByName) => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...fetchedByName],
          page: prevState.page + 1,
        }));
        windowsScrolling();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || "/");
  };

  render() {
    const { movies, isLoading, error } = this.state;
    const { location } = this.props;
    const itemUrl = "movies/";

    return (
      <>
        <div>
          <h1>Movie page</h1>
          <Searchbar onSubmit={this.onSearchQuery} />
        </div>
        <div>
          {isLoading && (
            <Loader
              className={styles.Loader}
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          )}
          {error && (
            <h2 style={{ textAlign: "center" }}>
              Oops, something went wrong :/
            </h2>
          )}
          <MovieList>
            <MovieItem movies={movies} itemUrl={itemUrl} location={location} />
          </MovieList>
        </div>
      </>
    );
  }
}

export default MoviePage;
