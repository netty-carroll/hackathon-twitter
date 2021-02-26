import React from 'react'
import {Avatar} from "@material-ui/core"
import "./navbarProfileSection.css"
import MoreIcon from '@material-ui/icons/MoreHoriz';


// we will need to create another js file to add the function to open an menu for the profile options 

const CurrentProfileDisplay = () => {
    return(
        
        <div className="currentProfile">
                <div className="profileImage">
                    <Avatar src="https://pbs.twimg.com/profile_images/1250932097725992960/lt6qxsT1_400x400.jpg"/>
                    
                </div>
                
                <div className="nameAndUsername">
                    <div className="twitterName">
                        <h3>Team Raphael</h3>
                    </div>

                    <div className="twitterUsername">
                        <h3>@TeamRaphael</h3>
                    </div>
                </div>

                <div className="profileOptionsButton">
                        <div className="moreIconp"><MoreIcon /></div>
                </div>
                 
            </div>
            
    )
}
export default CurrentProfileDisplay;