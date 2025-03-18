import React, { useState } from 'react';
import $ from 'jquery';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';

const Gallery = () => {
  // Gallery data
  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      title: 'Premium Headphones',
      category: 'Electronics',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      title: 'Sport Shoes',
      category: 'Fashion',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      title: 'Smart Watch',
      category: 'Electronics',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f',
      title: 'Camera',
      category: 'Electronics',
    },
    {
      id: 5,
      image: 'https://wallpaperswide.com/download/nike_basketball_sneakers-wallpaper-1600x900.jpg',
      title: 'Designer Collection',
      category: 'Fashion',
    },
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUe_FLqzEHcljNtzWlH7t9OMOnkTCpNM5rqA&s',
      title: 'Lifestyle Products',
      category: 'Lifestyle',
    },
  ];

  // State for pagination and filtering
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('all');
  const itemsPerPage = 6;

  // Filter gallery items based on category
  const filteredItems = galleryItems.filter(
    (item) => currentCategory === 'all' || item.category === currentCategory
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle filter change
  const handleFilterChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Product Gallery</h1>
          <p className="lead">Explore Our Collection Through Beautiful Images</p>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="container my-4">
        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group">
            <button
              className={`btn btn-outline-primary ${currentCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            <button
              className={`btn btn-outline-primary ${currentCategory === 'Electronics' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Electronics')}
            >
              Electronics
            </button>
            <button
              className={`btn btn-outline-primary ${currentCategory === 'Fashion' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Fashion')}
            >
              Fashion
            </button>
            <button
              className={`btn btn-outline-primary ${currentCategory === 'Lifestyle' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Lifestyle')}
            >
              Lifestyle
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Items */}
      <div className="container">
        <div className="row g-4">
          {currentItems.map((item) => (
            <div className="col-md-4" key={item.id}>
              <a href={item.image} data-lightbox="gallery">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="text-muted">{item.category} Collection</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="container my-4 text-center">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {/* Previous Button */}
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {/* Page Number */}
            <li className="page-item active">
              <span className="page-link">{currentPage}</span>
            </li>

            {/* Next Button */}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Gallery;