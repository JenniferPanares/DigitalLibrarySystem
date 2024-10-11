import React, { useState } from 'react';
import './EbookFilesSearch.css';  
import ebookLogo from './images/ebook_logo.png';  
import digitalCover from './images/Digital_Marketing_cover.jpg';  
import ITcover from './images/IT.jpg';  
import javaCover from './images/Java_cover.jpg';  
import AIcover from './images/AI.jpg';  
import reactCover from './images/React_cover.jpg';  
import designCover from './images/Design_cover.jpg';  

const App = () => {
  const [ebooks, setEbooks] = useState([
    { 
      id: 1, 
      title: "Java Programming", 
      author: "Jen Can", 
      genre: "Programming", 
      publicationDate: "2020", 
      rating: 4.5, 
      coverImage: javaCover
    },
    { 
      id: 2, 
      title: "Digital Marketing 101", 
      author: "2Q press", 
      genre: "Business", 
      publicationDate: "2018", 
      rating: 4.2, 
      coverImage: digitalCover
    },
    { 
      id: 3, 
      title: "Learn React", 
      author: "Robert Smith", 
      genre: "Web Development", 
      publicationDate: "2021", 
      rating: 4.8, 
      coverImage: reactCover
    },
    { 
      id: 4, 
      title: "What is Artificial Intelligence", 
      author: "Andy Cristiano", 
      genre: "Artificial Intelligence", 
      publicationDate: "2024", 
      rating: 4.7, 
      coverImage: AIcover
    },
    { 
      id: 5, 
      title: "Information Technology", 
      author: "Andy Cristiano", 
      genre: "Technology", 
      publicationDate: "2021", 
      rating: 4.3, 
      coverImage: ITcover
    },
    { 
      id: 6, 
      title: "Digital Design", 
      author: "John Snow", 
      genre: "Design", 
      publicationDate: "2023", 
      rating: 5.0, 
      coverImage: designCover
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [selectedImage, setSelectedImage] = useState(''); // State to hold the image URL

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image
    setModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedImage(''); // Clear the selected image
  };

  // Function to generate star rating based on the rating value
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating); // Round to the nearest whole number

    return (
      <>
        {[...Array(totalStars)].map((star, index) => {
          return (
            <span key={index} className={index < filledStars ? "star filled-star" : "star"}>★</span>
          );
        })}
      </>
    );
  };

  // Filter eBooks based on the search term
  const filteredEbooks = ebooks.filter(ebook => 
    ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    ebook.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={ebookLogo} alt="Ebooks Hub Logo" className="logo" />  
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

    
      </div>
    </nav>


      
      {/* Header Section with Logo */}
      <header className="header">
        <h1 className="text-center">Digital Library Access</h1>
      </header>

      <input
        type="text"
        placeholder="Search for eBooks by title or author..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredEbooks.length > 0 ? (
          filteredEbooks.map((ebook) => (
            <div key={ebook.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={ebook.coverImage}
                  className="card-img-top"
                  alt={`Cover of ${ebook.title}`}
                  style={{ height: '250px', objectFit: 'cover', cursor: 'pointer' }}  
                  onClick={() => handleImageClick(ebook.coverImage)} // Handle click to enlarge
                />
                <div className="card-body">
                  <h5 className="card-title">{ebook.title}</h5>
                  <p className="card-text"><strong>Author:</strong> {ebook.author}</p>
                  <p className="card-text"><strong>Genre:</strong> {ebook.genre}</p>
                  <p className="card-text"><strong>Publication Date:</strong> {ebook.publicationDate}</p>
                  <p className="card-text">
                    <strong>Rating:</strong> {renderStars(ebook.rating)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No eBooks found.</p>
        )}
      </div>

      {/* Modal Section */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <img src={selectedImage} alt="Enlarged cover" className="enlarged-image" />
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
