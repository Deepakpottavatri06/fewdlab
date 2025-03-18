import React from 'react';

const Partners = () => {
  // Partner data
  const partners = [
    {
      id: 1,
      image: 'https://media.istockphoto.com/id/1462139281/photo/two-professional-heavy-industry-engineers-wearing-hard-hats-at-factory-walking-and-discussing.jpg?s=612x612&w=0&k=20&c=FnrNr4HGDxxknumX1o5LYsgaLpH4GjmaNipQ0g7OzRY=',
      title: 'Partner Company 1',
      description: 'Leading manufacturer of quality products.',
    },
    {
      id: 2,
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logistic-and-transport-design-template-543695d711b96e1489efaa1c01916a58_screen.jpg?ts=1715677225',
      title: 'Partner Company 2',
      description: 'Global logistics and supply chain partner.',
    },
    {
      id: 3,
      image: 'https://img3.wallspic.com/previews/1/7/3/5/3/135371/135371-innovation-industry-information_technology-lighting-arm-550x310.jpg',
      title: 'Partner Company 3',
      description: 'Innovation and technology solutions.',
    },
    {
      id: 4,
      image: 'https://www.shipbob.com/wp-content/uploads/2019/12/custompackaging_header-1024x576-1.png',
      title: 'Partner Company 4',
      description: 'Sustainable packaging solutions.',
    },
    {
      id: 5,
      image: 'https://thumbs.dreamstime.com/b/quality-assurance-service-guarantee-standard-internet-business-technology-concept-123053344.jpg',
      title: 'Partner Company 5',
      description: 'Quality assurance and certification.',
    },
    {
      id: 6,
      image: 'https://assets.entrepreneur.com/content/3x2/2000/20160708033938-shutterstock-220493632.jpeg?format=pjeg&auto=webp&crop=16:9',
      title: 'Partner Company 6',
      description: 'Digital marketing and branding.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Our Partners</h1>
          <p className="lead">Meet Our Trusted Business Partners</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container my-5">
        <div className="row">
          {/* Partner Cards */}
          {partners.map((partner) => (
            <div className="col-md-4 mb-4" key={partner.id}>
              <div className="card text-center">
                <img src={partner.image} className="card-img-top" alt={partner.title} />
                <div className="card-body">
                  <h5 className="card-title">{partner.title}</h5>
                  <p className="card-text">{partner.description}</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Partners;