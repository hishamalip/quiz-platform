import React from 'react'
import Profile from './Profile';
import Scores from './Scores';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
 render() {
     return (
        <div className="overlay">
            <main>
                <div className="row">
                    <div className="sidebar">
                        <Profile/>
                    </div>
                    <Scores/>
                </div>
            </main>
        </div>

    );
 }
}

export default Dashboard;