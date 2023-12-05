
"use client";
import { useState } from "react";
import Login from "./Login";
import Navbar from '../Navbar';
import Footer from '../Footer';

const originalMovies = [
  {
    title: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    releaseYear: 2010,
  },

  {
    title: "The Dark Knight",
    actors: ["Christian Bale", " Heath Ledger", "Aaron Eckhart"],
    releaseYear: 2008,
  },

  {
    title: "Avatar",
    actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    releaseYear: 2009,
  },

  {
    title: "Pulp Fiction",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    releaseYear: 1994,
  },

  {
    title: "The Shawshank Redemption",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    releaseYear: 1994,
  },

  {
    title: "The Avengers",
    actors: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson"],
    releaseYear: 2012,
  },

  {
    title: "Forrest Gump",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    releaseYear: 1994,
  },
];

function MoviesList() {
  const [userType, setUserType] = useState("guest");
  const [movies, setMovies] = useState(originalMovies);
  const [editIndex, setEditIndex] = useState(null);
  const [newMovie, setNewMovie] = useState({
    title: "",
    actors: [],
    releaseYear: "",
  });

  const handleLogin = (user) => {
    setUserType(user);
  };

  const handleLogout = () => {
    setUserType("guest");
  };

  const handleDelete = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const movieToEdit = movies[index];
    setNewMovie({
      title: movieToEdit.title,
      actors: [...movieToEdit.actors],
      releaseYear: movieToEdit.releaseYear,
    });
  };

  const handleSave = () => {
    const updatedMovies = [...movies];
    if (editIndex !== null) {
      updatedMovies[editIndex] = newMovie;
    } else {
      updatedMovies.push(newMovie);
    }
    setMovies(updatedMovies);
    setNewMovie({ title: "", actors: [], releaseYear: "" });
    setEditIndex(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
      {userType === 'guest' ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <main style={{ margin: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#000' }}>
          <h1 style={{ color: '#3498db' }}>Movies List</h1>
          <ul style={{ listStyle: 'none', padding: 0 , fontFamily: 'monospace'}}>
            {movies.map((movie, index) => (
              <li
                key={index}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  margin: '10px 0',
                  padding: '10px',
                  backgroundColor: 'black',
                }}
              >
                <h2 style = {{color: 'green'}}>Title: {movie.title}</h2>
                <p style = {{color: 'purple'}}>Actors: {movie.actors.join(', ')}</p>
                <p style = {{color: 'purple'}}>Release Year: {movie.releaseYear}</p>
                {userType === 'admin' && (
                  <div>
                    <button
                      onClick={() => handleEdit(index)}
                      style={{
                        backgroundColor: '#2ecc71',
                        color: '#fff',
                        marginRight: '5px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      style={{
                        backgroundColor: '#e74c3c',
                        color: '#fff',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                     
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {userType === 'admin' && (
            <div style={{ margin: '20px' }}>
              <h2>{editIndex !== null ? 'Edit Movie' : 'Add Movie'}</h2>
              <input
                type="text"
                placeholder="Title"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                style={{ margin: '5px' }}
              />
              <input
                type="text"
                placeholder="Actors (comma-separated)"
                value={newMovie.actors.join(', ')}
                onChange={(e) =>
                  setNewMovie({
                    ...newMovie,
                    actors: e.target.value.split(', '),
                  })
                }
                style={{ margin: '5px' }}
              />
              <input
                type="text"
                placeholder="Release Year"
                value={newMovie.releaseYear}
                onChange={(e) => setNewMovie({ ...newMovie, releaseYear: e.target.value })}
                style={{ margin: '5px' }}
              />
              <button
                onClick={handleSave}
                style={{
                  backgroundColor: '#3498db',
                  color: '#fff',
                  margin: '5px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                {editIndex !== null ? 'Save' : 'Add'}
              </button>
            </div>
          )}
          <h2 style={{ color: '#3498db' }}>Logout</h2>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#e74c3c',
              color: '#fff',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              ':hover': {
                backgroundColor: '#c0392b',
              },
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2ecc71")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
          >
            Logout
          </button>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default MoviesList;