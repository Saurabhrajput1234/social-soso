import React, { useContext,useRef } from 'react'
import { LoginContext } from './contextProvider/ContextProvider';

const CreatePost = () => {
  const{addPost}=useContext(LoginContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit=(event)=>{
    
  event.preventDefault();
  const userId = userIdElement.current.value;
  const  postTitle =  postTitleElement.current.value;
  const postBody = postBodyElement.current.value;
  const reactions = reactionsElement.current.value;
  const tags = tagsElement.current.value.split('');

//   userIdElement.current.value="";
//  postTitleElement.current.value="";
//   postBodyElement.current.value="";
//  tagsElement.current.value="";
//  reactionsElement.current.value="";


 
fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title:postTitle,
    body:postBody,
    reactions:reactions,
    userId:userId,
    tags:tags,
   
  })
  
  
})
.then(res => res.json())
.then(post =>{ console.log('this data recieved from',post)
  addPost(post)});


 
 
  }



  return (
    <div style={{ width:"400px", border:"2px solid black" ,margin:"10rem",padding:"3rem"}}>
    <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">UserId</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="this is your id"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder='how are you feeling today...' />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">About Post</label>
    <textarea type="text" ref={postBodyElement} className="form-control" id="title" placeholder='tell me something about post..' />
  </div>
  <div className="mb-3">
    <label htmlFor="reaction" className="form-label">reactions</label>
    <input type="text" ref= {reactionsElement} className="form-control" id="reaction" placeholder='these are some reaction'/>
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">enter your hashtags</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder='please enter some tags using space' />
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>


      
    </div>
  )
}

export default CreatePost
