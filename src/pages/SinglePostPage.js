import React from 'react'
import { useLocation } from "react-router";
import { connect } from 'react-redux'
import { useSelector } from 'react-redux';
// import { Comment } from '../components/Comment'
import { fetchComments } from '../actions/commentsActions'
import { SinglePost } from '../components/SinglePost';


export const SinglePostPage = (props) => {
  
  const posts = useSelector((state)=> state.posts.posts)
    console.log("POSTS ARRAY for single post page:", posts, typeof posts);
    console.log("PROPS for single post page:", props);

  const { index } = props.match.params
    console.log("URL INDEX: ", index);      
    console.log("LOCATION", useLocation())    
  
  fetchComments(index)


  // const renderComments = () => {
  //       if (comments.loading) return <p>Loading comments...</p>
  //       if (comments.hasErrors) return <p>Unable to display comments.</p>
  //       return comments.map(comment => (
  //         <Comment key={comment.id} comment={comment} />
  //       ))
  //     }

    return (
        <section>
            <SinglePost post={posts[index]} />
            <h2>Comments</h2>
            {/* {renderComments()} */}
        </section>
    )
}

//Map Redux state to React component props
const mapStateToProps = (state) => {
    return ({
      posts: state.posts.posts,
      comments: state.comments.comments,
      loading: { post: state.posts.loading, comments: state.comments.loading },
      hasErrors: { post: state.posts.hasErrors, comments: state.comments.hasErrors }
  })
}

//Connect Redux to React
export default connect(mapStateToProps)(SinglePostPage)
