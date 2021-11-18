import "./profile.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Profile = () => {
  const history = useHistory();
  const [image, setImage] = useState();

  const profileData = [
    { type: "text", placeholder: "Name" },
    { type: "date", placeholder: "DOB" },
    { type: "text", placeholder: "Religion" },
    { type: "text", placeholder: "Height" },
  ];

  return (
    <div className="Profile">
      <img src={image ? URL.createObjectURL(image) : ""} alt="" />
      <button className="UploadButton">
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </button>
      {React.Children.toArray(
        profileData?.map((item) => {
          return <input type={item.type} placeholder={item.placeholder} />;
        })
      )}
      <button
        className="logout"
        type=""
        onClick={() => {
          history.push("/");
        }}
      >
        Log out
      </button>
    </div>
  );
};
