import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./read_more_text.css";


const ReadMoreLongText = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const post = useSelector(state => state?.post);
  const { postLists } = post;

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 395) : text}
      {
        postLists.map(post => (
          <Link to={`/posts/${post?._id}`} onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "" : ""}
          </Link>
        ))
      }
    </p>
  );
};


export default ReadMoreLongText
