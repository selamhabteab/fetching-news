import React from "react";
import { Link } from "react-router-dom";

export const Posts = ({ post, index }) => {
  console.log("POSTS component");

  return (
  <article className="post-excerpt">
    <h2>{post.title}</h2>
    <h4>{post.author ? `By ${post.author}` : "Unknown Author"}</h4>
    <p>{post.description ? post.description.substring(0, 100)+"..." : "Click the 'view post' button to learn more!"}</p>
    {/* <button className="button" onClick={()=>setCurrentPost(index)}>
      View Post
    </button> */}
    {/* <Redirect to={`/posts/${index}`}/> */}
    <Link to={`/posts/${index}`}>
    View Post
    </Link>
  </article>
  )};