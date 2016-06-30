//Step 1
/*
var movie = ["The Fifth Element", "Gone with the wind", "Independance Day", "Armageddon", "The Sixth Sense"];
console.log(movie[1]);
*/

//Step 2
/*
var movies = ["The Fifth Element", "Gone with the wind", "Independance Day", "Armageddon", "The Sixth Sense"];
console.log(movies[0]);
*/

//Step 3
/*
var movie = ["The Fifth Element", "Gone with the wind", "Terms of Endearment", "Independance Day", "Armageddon", "The Sixth Sense"];
console.log(movie.length);
*/

//Step 4
/*
var movie = ["The Fifth Element", "Gone with the wind", "Terms of Endearment", "Independance Day", "Armageddon", "The Sixth Sense"];
console.log(movie.slice(1));
*/

//Step 5
/*
var movie = ["The Fifth Element", "Gone with the wind", "Terms of Endearment", "Independance Day", "Armageddon", "The Sixth Sense", "Mad Max"];

for (var x in movie) {console.log(movie [x]);}
*/

//Step 6
/*
var movie = ["The Fifth Element", "Gone with the wind", "Terms of Endearment", "Independance Day", "Armageddon", "The Sixth Sense", "Mad Max"];

for (var index in movie) {console.log(movie[index]);}
*/

//Step 7
/*
var movie = ["The Fifth Element", "Gone with the wind", "Terms of Endearment", "Independance Day", "Armageddon", "The Sixth Sense", "Mad Max"];

for (var index in movie) {
    movie.sort();
    console.log(movie[index]);
}
*/

//Step 8
/*
var favMovie = ["The Fifth Element", "Gone with the wind", "Terms of Endearment"]

var leastFavMovie = ["2012", "Beloved", "Hawaii"];

function twoLists(favorites, leastFavorites) {
    window.console.log('Movies i like:\n\n ' + favorites + '\n\n...' + '\n\nMovies i regret watching:\n\n ' + leastFavorites);
}

twoLists(favMovie, leastFavMovie);
*/

//Step 9
/*
var favMovie = ["The Fifth Element", "\nGone with the wind", "\nTerms of Endearment", "\nIndependance Day", "\nArmageddon\n"];

var leastFavMovie = ["2012", "\nBeloved", "\nHawaii\n"];

var movies = favMovie.concat(leastFavMovie);


movies.sort();
movies.reverse();
window.console.log(movies);
*/

//Step 10
/*
var favMovie = ["The Fifth Element", "\nGone with the wind", "\nTerms of Endearment", "\nIndependance Day", "\nArmageddon\n"];

var leastFavMovie = ["2012", "\nBeloved", "\nHawaii\n"];

var movies = favMovie.concat(leastFavMovie);


var LI = movies.pop();

window.console.log(LI);
*/

//Step 11
/*
var favMovie = ["The Fifth Element", "\nGone with the wind", "\nTerms of Endearment", "\nIndependance Day", "\nArmageddon\n"];

var leastFavMovie = ["2012", "\nBeloved", "\nHawaii\n"];

var movies = favMovie.concat(leastFavMovie);


var LI = movies.shift();

window.console.log(LI);
*/

//Step 12
/*
var favMovie = ["The Fifth Element", "\nGone with the wind", "\nTerms of Endearment", "\nIndependance Day", "\nArmageddon\n"];

var leastFavMovie = ["2012", "\nBeloved", "\nHawaii\n"];

var movies = favMovie.concat(leastFavMovie);


movies.splice(5, 3, "Mad Max Fury Road", "The Martian", "Jurassic World");

window.console.log(movies);
*/