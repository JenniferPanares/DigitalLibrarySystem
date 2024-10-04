import React, { useState } from 'react';
import './UserProfile.css';
import { FaPencilAlt } from 'react-icons/fa'; // Importing Font Awesome's pencil icon

const UserProfile = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status
  const [isEditing, setIsEditing] = useState(false); // State to track if editing is enabled
  const [userData, setUserData] = useState({
    firstName: 'Squidward',
    lastName: 'Handsome',
    email: 'handsomesquidward@bikinibottom.com',
    phone: '+1 (987) 654-3210',
    billingStreet: '123 Main St',
    billingCity: 'Bikini Bottom',
    billingCountry: 'Under The Sea'
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleSaveClick = () => {
    setIsEditing(false); // Disable editing mode and hide save button
  };

  return (
    <div className="page-container">
      
      {/* Left Section */}
      <div className="left-section">
        <div 
          className="profile-picture-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src="images/ProfilePic.png" 
            alt="Profile Picture" 
            className="profile-picture"
          />
          {isHovered && (
            <div className="edit-icon">
              <FaPencilAlt className="pencil-icon" /> {/* Using the pencil icon */}
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Personal Information</h2>
        
        {/* First Name input */}
        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            value={userData.firstName} 
            onChange={handleInputChange} 
            disabled={!isEditing}
          />
        </div>

        {/* Last Name input */}
        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            value={userData.lastName} 
            onChange={handleInputChange} 
            disabled={!isEditing}
          />
        </div>

        {/* Email input */}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            id="email" 
            value={userData.email} 
            onChange={handleInputChange} 
            disabled={!isEditing}
          />
        </div>

        {/* Phone input */}
        <div className="input-group">
          <label htmlFor="phone">Phone:</label>
          <input 
            type="text" 
            id="phone" 
            value={userData.phone} 
            onChange={handleInputChange} 
            disabled={!isEditing}
          />
        </div>

        <h2>Payment Information</h2>

        {/* Billing Address input */}
        <div className="input-group">
          <label htmlFor="billingStreet">Billing Address:</label>
          <input 
            type="text" 
            id="billingStreet" 
            value={userData.billingStreet} 
            onChange={handleInputChange} 
            disabled={!isEditing}
          />
          <input 
            type="text" 
            id="billingCity" 
            value={userData.billingCity} 
            onChange={handleInputChange} 
            disabled={!isEditing}
          />
          <input 
            type="text" 
            id="billingCountry" 
            value={userData.billingCountry} 
            onChange={handleInputChange} 
            disabled={!isEditing}
          />
        </div>

        {/* Edit and Save buttons */}
        <div className="button-group">
          <button className="edit-button" onClick={handleEditClick} disabled={isEditing}>
            Edit
          </button>
          {isEditing && (
            <button className="save-button" onClick={handleSaveClick}>
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
