import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postsActions'
import { Posts } from '../components/Posts'



//Redux state is now in the props of the component 
const PostsPage = ({ match, dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

console.log("POSTS AFTER DISPATCH:", posts);
  //display all three possible states of the page: loading, error, successfully retrieved posts from the API
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;

    return posts.map((post, index) => {
      return <Posts  
                index={index} 
                key={post.source.name+index} 
                post={post}  
            /> 
    });
  };

  return (
    <section>
      <h1>Top 20 News Posts</h1>
      { renderPosts() }
    </section>
  )
}
//Map Redux state to React component props
const mapStateToProps = state => {
  console.log("MAPSTATE2PROPS", state)
  return (
    {loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,}
  )
}

//Connect Redux to React
export default connect(mapStateToProps)(PostsPage)