import { Component } from "react";
import Searchbar from "../components/Searchbar";
import ButtonGoBack from "../components/Buttons/ButtonGoBack";
import ButtonMore from "../components/Buttons/ButtonMore";
import MovieList from "../components/MovieList";
import MovieItem from "../components/MovieItem";
import Loader from "react-loader-spinner";

import { fetchMovieByName } from "../services/moviesApi";
import { windowsScrolling } from "../utils";

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

  componentDidMount() {
    if (localStorage.getItem("searchResults") !== null) {
      const parsedMovies = JSON.parse(localStorage.getItem("searchResults"));
      this.setState({
        movies: parsedMovies,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovieByName();
    }
  }

  componentWillUnmount() {
    this.state.movies.length > 0 &&
      localStorage.setItem("searchResults", JSON.stringify(this.state.movies));
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

    const loadingMoreButtonCondition = movies.length > 0 && !isLoading;

    return (
      <>
        <div>
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
          <ButtonGoBack goBack={this.handleGoBack} />
          <MovieList>
            <MovieItem movies={movies} itemUrl={itemUrl} location={location} />
          </MovieList>
          {loadingMoreButtonCondition && (
            <ButtonMore fetchMovieByName={this.fetchMovieByName} />
          )}
        </div>
      </>
    );
  }
}

export default MoviePage;
