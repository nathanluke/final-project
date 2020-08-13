import React from 'react';
import backgroundimage from '../../images/backgroundimage.jpg'
import './Login.css'

class Login extends React.Component{

    state = {
         firstName: "",
         lastName: "",
         username: "",
         password: "",
     }
  
     change = (e) => {
         this.setState({
             [e.target.name]:  e.target.value
         })
     }
     render(){
         return (
             <div className="Login-page" style={{ backgroundImage: {backgroundimage} }}>
              
               <div className="form">
                <h4 className="heading">Login</h4>
                 <div className="Login-form"> 
                 <form className="Login-form-items">
                         <input name="username" placeholder= "Username" value={this.setState.username} onChange={e => this.change(e)} />
                         <input name="password" placeholder= "Password" value={this.setState.passsword} onChange={e => this.change(e)} />
                   </form>
                   <div className="button">
                       <button><a href="/">Login</a></button>
                   </div>
  
                 </div>
     
               </div>
             </div>
           );
  
     }
  };


export default Login;