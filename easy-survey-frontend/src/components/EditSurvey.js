import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditSurvey() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/surveys/${id}`);
        setName(response.data.name);
        setDescription(response.data.description);
      } catch (error) {
        console.error('Error fetching survey:', error);
        setError('Error fetching survey data.');
      }
    };
    fetchSurvey();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.patch(`http://localhost:3000/surveys/${id}`, {
        name,
        description,
      });
      console.log('Survey updated:', response.data);
      navigate(`/surveys/${id}`); // Redirect to the survey details page or another page
    } catch (error) {
      console.error('Error updating survey:', error);
      setError('There was an issue updating the survey. Please try again.');
    }
  };

  return (
    <div>
      <h2>Edit Survey</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditSurvey;
