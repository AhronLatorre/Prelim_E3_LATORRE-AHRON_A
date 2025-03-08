import React from "react";

function ProfilePicture({ imageUrl }) {
  return (
    <div className="mb-3">
      <img
        src={imageUrl || "https://via.placeholder.com/100"}
        alt="Profile"
        className="rounded-circle"
      />
    </div>
  );
}

export default ProfilePicture;
