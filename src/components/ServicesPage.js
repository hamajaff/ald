import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styled/ServicesPage.css";

function ServicesPage() {
  const [posts, setPosts] = useState([]);
  const images = [
    "/renhallning1.jpg",
    "/gardener.jpg",
    "/snow-plow-4602073_1280.jpg",
  ]; // Bildernas sökvägar

  const fetchPosts = () => {
    axios
      .get("https://www.aldentreprenad.se/wp-json/wp/v2/posts?categories=3")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="services-container">
      {posts.map((post, index) => (
        <div key={post.id} className="service-item">
          <img
            src={images[index]}
            alt={`bild ${index + 1}`}
            className="service-img"
          />
          <div className="post">
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesPage;
