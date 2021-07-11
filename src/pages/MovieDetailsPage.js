import { Component } from "react";
import { Route } from "react-router-dom";

import {
  fetchMovieById,
  fetchCastById,
  fetchReviews,
} from "../services/moviesApi";

import MovieDetails from "../components/MovieDetails";
import CastList from "../components/CastList";
import ReviewList from "../components/ReviewList";

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    casts: [],
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieById(movieId).then((fetchedById) => {
      this.setState({ movie: fetchedById });
    });

    fetchCastById(movieId).then((fetchedCast) => {
      this.setState({ casts: fetchedCast.cast });
    });

    fetchReviews(movieId).then((fetchedReviews) => {
      this.setState({ reviews: fetchedReviews });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || "/");
  };

  render() {
    const { poster_path, title, overview, vote_average, genres } =
      this.state.movie;
    const { casts, reviews } = this.state;
    const { url, path } = this.props.match;

    console.log(genres, "---genres");

    /* const genresMap = genres.map((genre) => genre.name);
    console.log(genresMap, "-----genresMap"); */
    let genresList;
    if (genres) {
      let genresList = genres.map(({ name }) => name).join(", ");
      console.log(genresList, "-----genresList");
    }

    return (
      <>
        <MovieDetails
          posterPath={poster_path}
          title={title}
          overview={overview}
          voteAverage={vote_average}
          genresList={genresList}
          goBack={this.handleGoBack}
          pageUrl={url}
        />
        <Route
          exact
          path={`${path}/cast`}
          render={(props) => <CastList {...props} casts={casts} />}
        />
        <Route
          exact
          path={`${path}/reviews`}
          render={(props) => <ReviewList {...props} reviews={reviews} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
