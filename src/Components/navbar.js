import React from 'react';
export default function Navbar(){
    return (<div class="navbar">
                    <a href="/" className="nav-item">Home</a>
                    <a href="../dashboard" className="nav-item">Dashboard</a>
                    <a href="../dashboard/profile" className="nav-item" id="profile">Profile</a>
            </div>);
}