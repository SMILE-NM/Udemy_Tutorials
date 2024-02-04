//INFO: Lesson 19

function lesson19() {
  'use strict';

  const numberOfFilms = +prompt('How many films you are wathed ?');
  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
  };

  const lastMovieWatchedName = prompt('One of the last movies you watched ?');
  const lastMovieWatchedRate = prompt('How much would you rate it ?');

  personalMovieDB.movies[lastMovieWatchedName] = lastMovieWatchedRate;

  console.log(personalMovieDB);
}

lesson19();
