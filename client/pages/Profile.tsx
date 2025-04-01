// pages/Profile.tsx

import React, { useState, useEffect } from 'react';
import axios from 
npm install axios

npm install --save-dev @types/axios
;

const Profile: React.FC = () => {
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  });

  useEffect(() => {
    // Fetch the user's profile details from the backend
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(
        'http://localhost:5000/api/user/profile',
        { name: user.name, email: user.email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <div className="profile-info">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button className="profile-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
