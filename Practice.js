function Practices() {
  'use strict';

  function checkAnswer(str) {
    if (str.length < 0 || str > 50 || str === null && str === undefined) {
      return false;
    }
    return str;
  }

  const numberOfFilms = +prompt('How many films you are watched ?');



  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
  };


  for (let i = 0; i < 2; i++) {
    const lastMovieWatchedName = checkAnswer(prompt('One of the last movies you watched ?'));
    const lastMovieWatchedRate = checkAnswer(prompt('How much would you rate it ?'));

    if (!lastMovieWatchedName || !lastMovieWatchedRate) {
      i--;
      continue;
    }
    personalMovieDB.movies[lastMovieWatchedName] = lastMovieWatchedRate;
  }



  if (personalMovieDB.count < 10) console.log('Посмотрено довольно мало фильмов');
  else if (30 >= personalMovieDB.count && personalMovieDB.count >= 10) console.log('Вы классический хритель'); else if (personalMovieDB.count > 30) console.log();

  console.log(personalMovieDB);
}
