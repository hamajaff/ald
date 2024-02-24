import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styled/aboutPage.css";

function PostsByCategory() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://aldentreprenad.se/wp-json/wp/v2/posts?categories=4")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="aboutPage">
      <div className="headerPlaceholder"></div>
      <img src="/aboutus.png" alt="Our vision" className="vision"></img>
      <div className="card-container">
        {posts.map((post) => (
          <div key={post.id} className="postCard">
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsByCategory;
