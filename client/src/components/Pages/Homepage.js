import React from "react";
import "./Homepage.css";

class Homepage extends React.Component{

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
           <div className="Home-page">
            
             <div className="form">
              <h4 className="heading">Sign up below</h4>
               <div className="registration-form"> 
               <form className="registration-form-items">
                       <input name="firstName" placeholder= "First Name" value={this.setState.firstName} onChange={e => this.change(e)} />
                       <input name="lastName" placeholder= "Last Name" value={this.setState.lastName} onChange={e => this.change(e)} />
                       <input name="username" placeholder= "Username" value={this.setState.username} onChange={e => this.change(e)} />
                       <input name="password" placeholder= "Password" value={this.setState.passsword} onChange={e => this.change(e)} />
                 </form>
                 <div className="button">
                     <button><a href="/">Register</a></button>
                 </div>

               </div>
   
             </div>
           </div>
         );

   }
};

export default Homepage;
