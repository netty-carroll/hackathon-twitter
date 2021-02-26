import React from 'react'
import './post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function post() {
    return (
        <div className="post">
            <div classname="tweetAvatarWrap">
                <Avatar className="twattingAvatar" src="https://pbs.twimg.com/profile_images/1250932097725992960/lt6qxsT1_400x400.jpg" />
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            Team Raphael{""}
                            <span className="displayNameVerify">
                                <VerifiedUserIcon className="verifiedLogo" />@TeamRaphael
                            </span>
                        </h3>
                    </div>
                    <div className="tweetText">
                        <p> We could use this instead of images</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/3j1cHG02iKU3NEsnBy/giphy.gif" />
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

export default post;
