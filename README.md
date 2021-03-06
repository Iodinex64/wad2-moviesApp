# Assignment 1 - ReactJS app.

Name: Sean Duggan

## Features. 
 + New views: Top Rated, Now Playing, Watchlist
 + New TMDB endpoints: getTopRatedMovies, getNowPlayingMovies, getMovieProviders, getMovieCredits
 + Extra details on movie details pages: Popularity and original language
 + Watchlist functionality: Used watchlist button from labs to allow user to add upcoming movies to a watchlist

## Setup requirements (If required).

+ download and unzip repo in a directory of your choice
+ run command "npm install" from folder
+ (note that sometimes when first loading the app, it might give an error. Refreshing the browser fixes this.)

## API Data Model.
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - gets a list of the top rated movies
+ https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 - gets a list of movies that are currently playing in cinemas now
+ https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${process.env.REACT_APP_TMDB_KEY} - gets a movie's providers, where one could buy the movie
+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - gets a movie's credits information

## App Design.

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites - displays the user's favorite movies selection.
+ /reviews/:id - displays the full text of a movie review.
+ /movies/watchlist - displays watchlisted movies.
+ /movies/upcoming - displays upcoming movies.
+ /movies/toprated - displays top rated movies.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png

## Known Bugs
+ Adding movies to the watchlist and then refreshing the browser window can cause an error and the app must be restarted
+ Sometimes when first loading the app, it might give an error. Refreshing the browser can fix this.
