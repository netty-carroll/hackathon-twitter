import React from 'react'
import './tweetbox.css';
import {Avatar} from "@material-ui/core"
import InsertGifIcon from './images/gifAdd.svg';
import InsertEmojiIcon from './images/emojiAdd.svg';
import InsertMediaIcon from './images/imageAdd.svg';
import InsertAddQuestion from './images/graphAdd.svg';
import InsertSchedule from './images/scheduleAdd.svg';

const PostTweetBox = () => {
    return(
        <div className="tweetBoxFull">
            <form>
                <div className="inputBox">
                    <Avatar src="data:image/jpeg;base64,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"/>
                    <input type="text" placeholder="what's happening?"/>
                </div>
                </form>

                <div className="everyoneCanReply">
                    <div className="everyoneCanReplyBox">
                        {/* everyone can reply title/link
                        planet icon */}
                    </div>
                </div>

                <div className="buttonBox">                    
                    <div className="insertMedia">
                        <img src={InsertMediaIcon}></img>
                    </div>

                    <div className="insertGif">
                        <img src={InsertGifIcon}></img>  
                    </div>

                    <div className="askAQuestionTweet">
                        <img src={InsertAddQuestion}></img>
                    </div>

                    <div className="insertEmoji">
                        <img src={InsertEmojiIcon}></img>
                    </div>

                    <div className="createSchedule">
                        <img src={InsertSchedule}></img>
                    </div>
                    
                    <div className="shareTweetButton">
                        <button className="tweetBtn" href="#">Tweet{' '}</button>
                    </div>
                    
                    <div className="characterLimitationIcon">
                    </div>
                   

                    <div className="addAnotherTweetButton">
                    </div>
                 </div>
            </div>
        
    )
}
export default PostTweetBox;