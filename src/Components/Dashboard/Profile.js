import React from 'react'
import logo from '../../logo.svg';


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {profileval:{ name:"sachin",email:"sachin@abc.com"}}
    }
    render(){
        return (
        <div className="profile">
            <img src={logo} className="Profile-pic" alt="logo" />
            <div className="profile-details">
                {this.state.profileval.name}
                <br/>
                {this.state.profileval.email}
            </div>
        </div>
        );
    }
}
export default Profile; 