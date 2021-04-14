import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');

  const handlefirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handlelastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleGetAllPosts = async () => {
    console.log('testing');
  };

  const handleCreatePost = (event) => {
    console.log(firstName, lastName, description);
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/posts', {
        firstName,
        lastName,
        description,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleCreatePost}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" onChange={handlefirstNameChange}></input>
        <br></br>
        <label htmlFor="lname">Last Name:</label>
        <input type="text" onChange={handlelastNameChange}></input>
        <br></br>
        <label htmlFor="description">Description:</label>
        <textarea rows="4" cols="50" onChange={handleDescriptionChange} />
        <br></br>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
};

export default App;
