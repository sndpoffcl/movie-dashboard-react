import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

  handleDeleteMovie = (movie) => {
    const newMovieArr = this.state.movies.filter(
      (mov) => mov._id !== movie._id
    );
    this.setState({ movies: newMovieArr });
  };

  renderMovieTable() {
    if (this.state.movies.length === 0)
      return <h1 className="m-2">Sorry!! No movies</h1>;

    return (
      <React.Fragment>
        <h1>There are {this.state.movies.length} movies</h1>
        <table className="table m-2">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rental Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDeleteMovie(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  render() {
    return this.renderMovieTable();
  }
}

export default Movies;
