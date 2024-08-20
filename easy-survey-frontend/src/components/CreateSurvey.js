import React, { useState } from 'react';
import axios from 'axios';

function CreateSurvey() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/surveys', {
        name,
        description,
      });
      console.log('Survey created:', response.data);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error details:', error.response || error.message);
      setError('There was an issue creating the survey. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Survey</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Survey Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateSurvey;
