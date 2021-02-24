// we will need to create another js file to add the function to open an menu for the profile options 

const CurrentProfileDisplay = () => {
    return(
        <div className="currentProfile">
                <div className="profileImage">
                    {/* profile image needs to be added here, can be linked to the profile image in the tweet box */}
                </div>
                
                <div className="nameAndUsername">
                    <div className="twitterName">
                        {/* need to add the code to insert the profiles name here */}
                    </div>

                    <div className="twitterUsername">
                        {/* need to add the code to insert the profile's username here  */}
                    </div>

                    <div className="profileOptions">
                        <div className="profileOptionsButton">
                            {/* 3 dotted button to open profile options menu */}
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default CurrentProfileDisplay;