import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ⬅️ import navigation

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ⬅️ initialize navigate function

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', { username, password })
      .then(res => {
        alert(res.data);          // Show success message
        navigate('/');            // ⬅️ Redirect to Home page
      })
      .catch(err => {
        alert('Signup error');
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
