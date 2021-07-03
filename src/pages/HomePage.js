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

  fetchMovies = () => {
    fetchTrendingMovies()
      .then((fetchedMovies) => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...fetchedMovies],
        }));
      })
      .catch((error) => this.setState({ error }));
    // .finally(() => setTimeout(this.setState({ isLoading: false }), 500));
  };

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <button onClick={this.fetchMovies}>Fetch</button>
        <MovieList>
          <MovieItem movies={this.state.movies} />
        </MovieList>
      </div>
    );
  }
}

export default HomePage;
