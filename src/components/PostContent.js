import React from 'react';
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { LoginContext } from './contextProvider/ContextProvider';




const PostContent = ({post}) => {

  const{deletePost}=useContext(LoginContext);

  return (
    <div>
    <div className="card" style={{width: "30rem",margin:"34px"}}>
  <div className="card-body">
  <h5 className="card-user-id">{post.userId}</h5>
    <h5 className="card-title">{post.title}</h5>
    <span key={post.id} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"  onClick={()=> deletePost(post.id)}>
    <MdDelete/>
    
  </span>
    <p key={post.id} className="card-text">{post.body}</p>
   
    
  {post.tags.map((tag) => (
    <span  className="badge text-bg-success">
      {tag}
    </span>
  ))}


    <div class="alert alert-danger reaction" role="alert" style={{marginTop:"20px"}}>
    <p>This post is reacted by {post.reactions}+ people</p>
 
</div>
    
   
  </div>
</div>
    </div>
  )
}

export default PostContent
