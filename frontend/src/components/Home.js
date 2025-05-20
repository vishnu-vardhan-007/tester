import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the App</h2>
      <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
