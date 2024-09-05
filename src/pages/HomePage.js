import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the homepage of our e-commerce site!</p>
      <Link to="/products">See our products</Link>
    </div>
  );
}

export default HomePage;
