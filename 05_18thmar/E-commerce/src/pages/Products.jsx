import React, { useState } from 'react';

const Products = () => {
  // Sample product data
  const products = [
    {
      title: 'Premium Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    },
    {
      title: 'Sport Shoes',
      description: 'Comfortable and stylish running shoes for athletes.',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    },
    {
      title: 'Smart Watch',
      description: 'Modern smartwatch with health tracking features.',
      price: '$199.99',
      image: 'https://media.wired.com/photos/6511aab1189c419c40374c92/16:9/w_2400,h_1350,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg',
    },
    {
      title: 'Digital Camera',
      description: 'Professional camera for photography enthusiasts.',
      price: '$799.99',
      image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/08/Better-Aspect-Ratio-Cover.jpg',
    },
    {
      title: 'Travel Backpack',
      description: 'Spacious backpack perfect for adventures.',
      price: '$79.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIO5AG06MF0XrSmLanDb5UziYNL2R5y2YMNQ&s',
    },
    {
      title: 'Designer Sunglasses',
      description: 'Stylish sunglasses with UV protection.',
      price: '$159.99',
      image: 'https://wallpaperswide.com/download/sunglasses_2-wallpaper-2560x1440.jpg',
    },
    {
      title: 'Gaming Laptop',
      description: 'Powerful gaming laptop with high-end specs.',
      price: '$1,299.99',
      image: 'https://images-cdn.ubuy.co.in/65ddcb0bf7173f2ce3362279-asus-rog-16-touchscreen-gaming-laptop.jpg',
    },
    {
      title: 'Fitness Band',
      description: 'Track your fitness goals and activities.',
      price: '$59.99',
      image: 'https://cdn.thewirecutter.com/wp-content/media/2023/06/fitnesstrackers-2048px-2-3.jpg?auto=webp&quality=75&width=1024',
    },
    {
      title: 'Wireless Speaker',
      description: 'Portable Bluetooth speaker with deep bass.',
      price: '$99.99',
      image: 'https://m.media-amazon.com/images/I/310VW0UhGBL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      title: 'Leather Wallet',
      description: 'Premium leather wallet with multiple slots.',
      price: '$49.99',
      image: 'https://7bags.com.ua/wa-data/public/shop/products/38/65/66538/images/4664495/4664495.970x0@2x.jpg',
    },
    {
      title: 'Office Chair',
      description: 'Ergonomic office chair for maximum comfort.',
      price: '$229.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLxA8P-wu1kQDdaCboj7rJiFXgEo5pNgUPw&s',
    },
    {
      title: 'Smartphone',
      description: 'Latest smartphone with powerful features.',
      price: '$999.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_BeTMbeqryekd7jMJVdlNn2MQcS8tlZ71A&s',
    },
  ];

  // Pagination state
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Our Products</h1>
          <p className="lead">Discover Quality and Style</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container my-5">
        <div className="row">
          {/* Product Cards */}
          {currentProducts.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="product-price mb-3">{product.price}</p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav aria-label="Product navigation" className="mt-4">
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

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}
                key={i}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

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
      </main>
    </div>
  );
};

export default Products;