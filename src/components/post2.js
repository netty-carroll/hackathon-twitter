import React from 'react'
import './post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function post2() {
    return (
        <div className="post">
            <div classname="tweetAvatarWrap">
                <Avatar src="https://pbs.twimg.com/profile_images/1767309931/image_400x400.jpg" />
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            Jake Dibbert{""}
                            <span className="displayNameVerify">
                                <VerifiedUserIcon className="verifiedLogo" />@JakeyDibbert
                            </span>
                        </h3>
                    </div>
                    <div className="tweetText">
                        <p> This project has made me age a few years!</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/vSkXRfZ9mjNQY/giphy.gif" />
                <div className="tweetFooter">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />

                </div>
            </div>


        </div>

    )
}

export default post2;
