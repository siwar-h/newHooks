import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Movie = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height="250px" src={movie.posterURL} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text style={{ height: '20rem' }}>
            {movie.description}
          </Card.Text>
          <Button variant="primary">{`Rating: ${movie.rating}`}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;