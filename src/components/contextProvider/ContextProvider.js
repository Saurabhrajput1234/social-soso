import React, { createContext,useReducer,useState,useEffect } from 'react';
export const LoginContext = createContext( {
  postList : [],
  addPost:()=>{},
  fetching: false,
  deletePost:()=>{}
});

const postListReducer = (currPostList,action)=>{
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
  }
  else if(action.type === "ADD_INITIAL_POST")
  {newPostList= action.payload.posts;}
  else if(action.type === 'ADD_POST'){
    newPostList = [ action.payload.post,...currPostList]
  }
  return newPostList;
}

const ContextProvider = ({children}) => {
    //this is use reducer hook
  const [postList,dispatchPostList] = useReducer(postListReducer,[])
  const addPost = (post)=>{
   
    
    dispatchPostList({
    type:'ADD_POST',
    payload:{
      
      post, }
  }) 

  }
  const addInitialPosts = (posts)=>{ dispatchPostList({
    type:'ADD_INITIAL_POST',
    payload:{
      posts,
    }
  }) 

  }
  const deletePost = (postId)=>{
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId
      },
    })
  }
   
  const [fetching,setFetching]= useState(false);
  useEffect(()=>{
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
    .then(data =>{
      addInitialPosts(data.posts)
      setFetching(false);
    });
    return ()=>{
      controller.abort();
      //when end this coponent move to another components then return this statment
    }

  },[])


  return (
    <>
    <LoginContext.Provider value={
    { postList,
      addPost,
      fetching,
      deletePost}

    }> 
    {children}
     </LoginContext.Provider>

    </>
  )
}





export default ContextProvider;
