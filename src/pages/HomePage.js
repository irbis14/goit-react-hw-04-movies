import { Component } from "react";
import MovieList from "../components/MovieList";
import MovieItem from "../components/MovieItem";
import { fetchTrendingMovies } from "../services/moviesApi";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    fetchTrendingMovies()
      .then((fetchedMovies) => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...fetchedMovies],
        }));
      })
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { movies } = this.state;

    const itemUrl = "movies/";
    // const { url } = this.props.match;
    return (
      <div>
        <MovieList>
          <MovieItem movies={movies} itemUrl={itemUrl} />
        </MovieList>
      </div>
    );
  }
}

export default HomePage;
