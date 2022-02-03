//Create redux action types
export const GET_POSTS = 'GET POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

//Create redux action creators that return an action
export const getPosts = () => ({ type: GET_POSTS }) //begin telling Redux we're going to fetch posts from an API

export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  //pass the posts to Redux on successful API call
  payload: posts,
})
export const getPostsFailure = () => ({ type: GET_POSTS_FAILURE }) // inform Redux that an error was encountered during Redux on failed API call

//Finally, make the asynchronous thunk action that combines all three of the above actions. When called, it will dispatch the initial getPosts() action to inform Redux to prepare for an API call, then in a try/catch, do everything necessary to get the data, and dispatch a success or failure action as necessary.
export function fetchPosts() {
  return async dispatch => {
    // dispatch(getPosts())
    
    await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=613f89cd72f246ab96d4a4b2053fb5d5').then((response)=> {
      return response.json()
    }).then((posts) =>{
      console.log("FETCH POSTS: ", posts);
      console.log("FETCH A POST[1]: ", posts.articles[1]);
      const postsArray = []
      posts.articles.map((post, index)=>{
        post.source = {
          id: post.source.id,
          name: post.source.name,
          index: index
        }
        return postsArray.push(post)
      })
      console.log("COPY OF POSTS ARRAY: ", postsArray);
      dispatch(getPostsSuccess(postsArray))
    }
    ).catch((error) => {
      console.error(error)
      dispatch(getPostsFailure())
    })
  }
}
