import React, { useEffect, useState } from 'react'
import PostContent from './PostContent'
import { useContext } from 'react'
import { LoginContext } from './contextProvider/ContextProvider';
import WellcomeMassage from './WellcomeMassage';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {

  const{postList,fetching}= useContext(LoginContext);
   

  
  
  return (
    <div>
     {fetching && <LoadingSpinner/>} 
     {!fetching && postList.length === 0 && <WellcomeMassage />}
     {!fetching && postList.map((post)=>(
      <PostContent key = {post.id} post={post}/>
     ))}
      
    </div>
  )
}

export default PostList
