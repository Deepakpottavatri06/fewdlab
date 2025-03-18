import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';
const Home = () => {
    const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your API key

  const fetchWeather = async () => {
    if (!city) {
        setError('Please enter a city name.');
        return;
      }
  
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
  
        if (data.cod === 200) {
          setWeatherData(data);
          setError('');
        } else {
          setError('City not found. Please try again.');
          setWeatherData(null);
        }
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
        setWeatherData(null);
      }
      
  };


  return (
    <div>
        <div className="container mt-4">
        <div className="card shadow-sm border-0">
          <div className="card-body text-center">
            <h5 className="card-title mb-4">Check Weather</h5>
            <div className="input-group mb-3 mx-auto" style={{ maxWidth: '400px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="btn btn-primary" onClick={fetchWeather}>
                Get Weather
              </button>
            </div>
            {error && <p className="text-danger">{error}</p>}

            {/* Weather Details Card */}
            {weatherData && (
              <div className="card mt-4 border-0 shadow-sm">
                <div className="card-body">
                  <h4 className="card-title mb-3">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    {weatherData.name}, {weatherData.sys.country}
                  </h4>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="mb-2">
                        <i className="bi bi-thermometer-half me-2"></i>
                        <strong>Temperature:</strong> {weatherData.main.temp}°C
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-cloud-fill me-2"></i>
                        <strong>Weather:</strong> {weatherData.weather[0].description}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-2">
                        <i className="bi bi-droplet-fill me-2"></i>
                        <strong>Humidity:</strong> {weatherData.main.humidity}%
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-wind me-2"></i>
                        <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
              <h2>Welcome to E-Store</h2>
              <p>Your One-Stop Shop for Quality Products</p>
              <Link to="/products" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
              <h2>Exclusive Offers</h2>
              <p>Grab the best deals on our latest collections.</p>
              <Link to="/products" className="btn btn-primary btn-lg">
                View Offers
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
              <h2>New Arrivals</h2>
              <p>Explore our newest products and collections.</p>
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Featured Products Section */}
      <section className="container my-5">
        <div className="text-center mb-5">
          <h2>Featured Products</h2>
          <p className="text-muted">Check out our top-selling products</p>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                className="card-img-top"
                alt="Featured Product"
              />
              <div className="card-body">
                <h5 className="card-title">Premium Headphones</h5>
                <p className="card-text">High-quality wireless headphones with noise cancellation.</p>
                <p className="text-primary fw-bold">$299.99</p>
                <Link to="/products" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                className="card-img-top"
                alt="Featured Product"
              />
              <div className="card-body">
                <h5 className="card-title">Sport Shoes</h5>
                <p className="card-text">Comfortable and stylish running shoes for athletes.</p>
                <p className="text-primary fw-bold">$149.99</p>
                <Link to="/products" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                className="card-img-top"
                alt="Featured Product"
              />
              <div className="card-body">
                <h5 className="card-title">Smart Watch</h5>
                <p className="card-text">Modern smartwatch with health tracking features.</p>
                <p className="text-primary fw-bold">$199.99</p>
                <Link to="/products" className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>What Our Customers Say</h2>
            <p className="text-muted">Hear from our happy customers</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    "E-Store has the best products and excellent customer service. Highly recommended!"
                  </p>
                  <h5 className="card-title">- John Doe</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    "I love shopping at E-Store. The quality of their products is unmatched."
                  </p>
                  <h5 className="card-title">- Jane Smith</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">
                    "Fast delivery and great prices. I will definitely shop here again!"
                  </p>
                  <h5 className="card-title">- Michael Johnson</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2>Join Our Newsletter</h2>
          <p className="lead">Subscribe to get the latest updates and exclusive offers.</p>
          <form className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-50 me-2"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-light">
              Subscribe
            </button>
          </form>
        </div>
      </section>


    </div>
  );
};

export default Home;