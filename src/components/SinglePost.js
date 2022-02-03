import React from 'react'
import { Link } from 'react-router-dom';

export const SinglePost = ({ post }) => {
    console.log("POST-CONTENT", post.content)
    
    return (
    <article className="post">
        <h2>{post.title}</h2>
        <h4>{post.author ? `By ${post.author}` : "Unknown Author"}</h4>
        <p> {post.content} <a href={`${post.url}`} className="alinks"> View more </a> </p>
        <Link to="/posts">
            Return to News Post
        </Link>
    </article>
    )}
   