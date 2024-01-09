import React, { useState } from "react";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      userImage: "https://placekitten.com/500/500",
      imageUrl: "https://placekitten.com/500/500",
      caption: "A cute kitten!",
    },
    {
      id: 2,
      username: "user2",
      userImage: "https://placekitten.com/500/500",
      imageUrl: "https://placekitten.com/500/500",
      caption: "A cute kitten!",
    },
    {
      id: 3,
      username: "user3",
      userImage: "https://placekitten.com/500/500",
      imageUrl: "https://placekitten.com/500/500",
      caption: "A cute kitten!",
    },
    {
      id: 4,
      username: "user4",
      userImage: "https://placekitten.com/500/500",
      imageUrl: "https://placekitten.com/501/501",
      caption: "A cute kitten!",
    },
    {
      id: 5,
      username: "user5",
      userImage: "https://placekitten.com/500/500",
      imageUrl: "https://placekitten.com/501/501",
      caption: "Another cute kitten!",
    },
    // Add more posts as needed
  ];

  // State for handling likes
  const [likes, setLikes] = useState({});
  const [likeCount,setcount]= useState(0);

  const handleLike = (postId) => {
    setLikes(() => ({
      ...likes,
      [postId]: !likes[postId],
    }));
     
   
  };

  return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img
                src={post.userImage}
                alt="userImage"
                className="profileImg"
              />
              <span>{post.username}</span>
            </div>
            <img src={post.imageUrl} alt="Post" className="post-image" />
            <div className="post-footer">
              <div className="footer-cont">
              <button onClick={() => handleLike(post.id)}>
                {likes[post.id] ? <span className="material-symbols-outlined" style={{color: "red" }}>
favorite
</span> : <span className="material-symbols-outlined">
favorite
</span>}
              </button>
              <span className="material-symbols-outlined">comment</span>

              <span className="material-symbols-outlined">
send
</span></div>
   <div className="like-count">
    {likes[post.id]? likeCount+1:likeCount} likes
   </div>

              <div  className="caption">
              <p >{post.caption}</p>
              </div>

              <div className="commentInput">
                <input style={{border:"none",width:"80%" ,padding:"0"}} type="text" className="text" placeholder="Add a comment..." />
                <button className="post" style={{color:"#397ec8",border:"none",padding:"12px"}}>Post</button>
                <span className="mood material-symbols-outlined">
mood
</span>
              </div>
              

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
