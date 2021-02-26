import React from 'react'
import './post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function post3() {
    return (
        <div className="post">
            <div classname="tweetAvatarWrap">
                <Avatar src="https://pbs.twimg.com/profile_images/1348408803847507973/ITH-kyXv_400x400.jpg" />
            </div>
            <div className="postBody">
                <div className="postHeader">
                    <div className="postHeaderText">
                        <h3>
                            NMunro{""}
                            <span className="displayNameVerify">
                                <VerifiedUserIcon className="verifiedLogo" />@Neil_Munro
                            </span>
                        </h3>
                    </div>
                    <div className="tweetText">
                        <p> You're project is due soon, focus on that and get off Twitter!</p>
                    </div>
                </div>
                <img src="https://media1.tenor.com/images/df670ab4733de6e3704bdf583a7542fc/tenor.gif?itemid=14507681" />
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

export default post3;
