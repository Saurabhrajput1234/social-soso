import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import{Routes,Route} from "react-router-dom";
import Error from "./components/Error";
// import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import ContextProvider from "./components/contextProvider/ContextProvider";
import Header from "./components/Header";
import Sidebars from "./components/Sidebars";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";



function App() {





//"proxy": "http://localhost:3000",
// 

  return ( <>
   <ContextProvider>
   <div className="nav-container">
   <Sidebars />
   <div>
   <Header/>
   

   
   </div>
   
   </div>


   <div className="content">
   
  
    {/* <Dashboard/> */}
    <Routes>
    
    <Route path="/posts" element={ <PostList/> } />
      <Route path="/login" element={<Login/>} />
      <Route path="/CreatePost" element={<CreatePost/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/dash" element={<Dashboard/>}/>
      <Route path="*" element={<Error/>}/>
      {/* <Route path="/login" element={<LoginForm/>}/> */}
      <Route path="/Home" element ={<HomePage/>}/>
      
    </Routes>
    </div>
    </ContextProvider>
    
    </>
  );
}

export default App;
