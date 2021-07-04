import { Component } from "react";
import { Route } from "react-router-dom";

import { fetchMovieById } from "../services/moviesApi";
import { fetchCastById } from "../services/moviesApi";

import MovieDetails from "../components/MovieDetails";
import CastList from "../components/CastList";

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    casts: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieById(movieId).then((fetchedById) => {
      this.setState({ movie: fetchedById });
    });
  }

  fetchCast = () => {
    const { movieId } = this.props.match.params;
    fetchCastById(movieId).then((fetchedCast) => {
      this.setState({
        casts: fetchedCast.cast,
      });
      console.log(fetchedCast.cast);
    });
  };

  render() {
    const { poster_path, original_title, overview, vote_average, ganres } =
      this.state.movie;
    const { casts } = this.state;
    // const genresList = genres.map(({ name }) => name).join(", ");

    const { pageUrl } = this.props.match;
    return (
      <>
        <MovieDetails
          posterPath={poster_path}
          originalTitle={original_title}
          overview={overview}
          voteAverage={vote_average}
          // genres={genresList}
          goBack={this.props.history.goBack}
          fetchCast={this.fetchCast}
          pageUrl={pageUrl}
        />
        <Route
          path="/movies/:movieId/cast"
          render={(casts) => <CastList casts={casts} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
