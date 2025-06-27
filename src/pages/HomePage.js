import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to My E-Shop!</h1>
        <p>Your one-stop destination for quality products.</p>
        <Link to="/products" className="shop-now-button">
          Shop Now
        </Link>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At My E-Shop, we are committed to bringing you the best products at
          unbeatable prices. Our curated selection ensures quality and customer
          satisfaction.
        </p>
      </section>

      {/* You can add more sections like featured categories, testimonials, etc. */}
    </div>
  );
}

export default HomePage;