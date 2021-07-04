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
    const { poster_path, original_title, overview, vote_average, ganres } =
      this.state.movie;
    const { casts, reviews } = this.state;
    const { location } = this.props;
    console.log(location, "------location Movie Details Page");

    // const genresList = genres.map(({ name }) => name).join(", ");

    const { url, path } = this.props.match;

    return (
      <>
        <MovieDetails
          posterPath={poster_path}
          originalTitle={original_title}
          overview={overview}
          voteAverage={vote_average}
          // genres={genresList}
          goBack={this.handleGoBack}
          pageUrl={url}
          // location={location}
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
