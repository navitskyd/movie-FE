import ReactDOM from 'react-dom';
import React from 'react';
import MovieCard from 'components/movie.card';
const App = () => {
 return (
 <>
 <h1>This is my React app!</h1>
 <MovieCard />
 <MovieCard />
 <MovieCard />
  </>
 )
 }
ReactDOM.render(<App />, document.getElementById('app'));

