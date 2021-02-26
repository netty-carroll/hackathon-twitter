import React from 'react'
import Searchbar from './searchbar';
import WhatsHappening from './whatsHappening';
import WhoToFollow from './whotofollow';
import TwitterFooter from './footer'
import './widgets.css'

function widgets() {
    return (
        <div className="widgets">
            <Searchbar />
            <div className="widgetContainer">
                <WhatsHappening />
                <WhoToFollow />
                <TwitterFooter />  
            </div>  
        </div>
    )
}

export default widgets;

