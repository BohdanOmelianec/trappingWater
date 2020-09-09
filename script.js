const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt('How much films have you watched?');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('How much films have you watched?');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Last film?'),
                b = prompt('Rate it up to 10');
            if (a != '' && b != '' && a != null && b != null && a.length < 20) {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    myLevel: function () {
        if (this.count < 10) {
            console.log('Too less');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('You are cool watcher!');
        } else {
            console.log('You are the best');
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const tech = prompt(`What ${i+1} genres do you like?`);
            if (tech != '' && tech != null && tech.length < 20) {
                this.genres[i] = tech;
            } else {
                i--;
            }
        }
        this.genres.forEach((value, index) => {
            console.log(`Улюблений жанр № ${index+1} це ${value}`);
        });

    },
    toggleVisibleMyDB: function () {
        if (!this.privat) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
};

// personaMovieDB.start();
// personaMovieDB.rememberMyFilms();
// personaMovieDB.myLevel();
// personaMovieDB.toggleVisibleMyDB();
// personaMovieDB.showMyDB();
// personaMovieDB.writeYourGenres();