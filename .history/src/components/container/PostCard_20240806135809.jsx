import React from "react";
import service from "../../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className=""></div>
      </div>
    </Link>
  );
};

export default PostCard;
