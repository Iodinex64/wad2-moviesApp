import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchlistMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlisted = context.movies.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlisted}
      title={"Watchlisted Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchlistMoviesPage;