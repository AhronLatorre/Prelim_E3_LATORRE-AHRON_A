import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value }); 
  };

  return (
    <div className="container text-center">
      <h2>Profile Page</h2>
      <ProfilePicture />
      <UserInfo name={user.name} />

      <div className="mt-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control w-50 mx-auto"
          value={user.name}
          onChange={handleNameChange}
        />
      </div>
      
    
    
    </div>
  );
}

export default Profile;
