import React from 'react'
import { useState } from 'react';

const AddMovies = ({addNewmovies}) => {
    const [input, setInput] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: ''
      });
    
      const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      };
    
      const handleAddMovie = () => {
        addNewmovies(input);
        setInput({
          title: '',
          description: '',
          posterURL: '',
          rating: ''
        });
      };
  return (
    <div>
         <label> title</label>
        <input type='text' placeholder='title' name='title' onChange={handleChange} /> <br></br>

        <label> description</label>
        <input type='text' placeholder='description' name='description' onChange={handleChange}/> <br></br>
        
        <label> posterURL</label>
        <input type='text' placeholder='posterURL' name='posterUR' onChange={handleChange}/> <br></br>

        <label> rating</label>
        <input type='text' placeholder='rating' name='rating' onChange={handleChange}/> <br></br>
        <button onClick={handleAddMovie}>Add</button>
      
      
      
    </div>
  )
}

export default AddMovies
