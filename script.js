let numOfFilms;

function start() {
    numOfFilms = +prompt('How much films have you watched?');

    while (numOfFilms == '' || numOfFilms == null || isNaN(numOfFilms)) {
        numOfFilms = +prompt('How much films have you watched?');
    }
}
start();
const personaMovieDB = {
    count: numOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Last film?'),
            b = prompt('Rate it up to 10');
        if (a != '' && b != '' && a != null && b != null && a.length < 20) {
            personaMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function myLevel() {
    if (personaMovieDB.count < 10) {
        console.log('Too less');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log('You are cool watcher!');
    } else {
        console.log('You are the best');
    }
}
myLevel();
function showMyDB () {
    if(!personaMovieDB.privat) {
        console.log(personaMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const tech = prompt(`What ${i+1} genres do you like?`);
        if(tech != '' && tech != null && tech.length < 20) {
            personaMovieDB.genres[i] = tech;
        } else {
            i--;
        }
    }
}
writeYourGenres();
