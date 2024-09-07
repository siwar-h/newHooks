import './App.css';
import { useState } from 'react';
import MoviesListe from './MoviesListe'
import AddMovies from './AddMovies';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham, but he soon finds himself prey to a reign of chaos unleashed by a rising criminal mastermind known as the Joker.",
      posterURL: "https://oblikon.net/wp-content/uploads/Inception_Banner.jpg",
      rating: "8.8/10",
    },
    {
      title: "The Dark Knight",
      description: "A skilled thief, who is capable of infiltrating dreams to steal secrets, is offered a chance to have his criminal record erased as payment for planting an idea into the mind of a CEO.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi1arS70w_kXQTF-GctH3Vz_vXSLK3ZxHVQ&s.jpg",
      rating: "9.0/10",
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces an impending disaster.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-h80UHQR3oxlW6cIb_0AwWbGYgZn7jRf_g&s.jpg",
      rating: "8.6/10",
    },
    {
      title: "The Matrix",
      description: "A hacker discovers that his reality is a simulated world created by intelligent machines and joins a rebellion against them to free humanity.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnjzQtRhpZGcxWC55tkpsu6wtAk7uVX4X5A&s.jpg",
      rating: "8.7/10",
    }
  ]);

  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const [keyword, setKeyword] = useState('');
  const [rating, setRating] = useState(1);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(keyword.toLowerCase().trim()) &&
      parseFloat(movie.rating.split("/")[0]) >= rating
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Add New Movies</h1>
        <AddMovies addNewMovie={addNewMovie} />
        <hr />
        <Filter setKeyword={setKeyword} setRating={setRating} />
        <hr />
        <div className='container-md'>
          <h1>Movies Liste</h1>
          <MoviesListe movies={filteredMovies} />
        </div>
      </header>
    </div>
  );
}

export default App;