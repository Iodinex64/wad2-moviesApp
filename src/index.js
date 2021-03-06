import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import FavoriteMoviesPage from "./pages/favoritesMoviesPage";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader /> 
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>    {/* NEW */}
              <Switch>
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
          <Route exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
            </GenresContextProvider>    {/* NEW */}
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));