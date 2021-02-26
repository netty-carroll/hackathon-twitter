import React from 'react'
import './tweetbox.css';
import { Avatar } from "@material-ui/core"
import InsertGifIcon from './images/gifAdd.svg';
import InsertEmojiIcon from './images/emojiAdd.svg';
import InsertMediaIcon from './images/imageAdd.svg';
import InsertAddQuestion from './images/graphAdd.svg';
import InsertSchedule from './images/scheduleAdd.svg';

const PostTweetBox = () => {
    return (
        <div className="tweetBoxFull">
            <form>
                <div className="tweetBox_input">
                    <Avatar className="avatarCSS" src="https://pbs.twimg.com/profile_images/1250932097725992960/lt6qxsT1_400x400.jpg" />
                    <input placeholder="What's happening?" type="text" />
                </div>

                <div className="buttonBox">
                    <div className="insertMedia">
                        <img className="btnBoxIcn" src={InsertMediaIcon}></img>
                    </div>

                    <div className="insertGif">
                        <img className="btnBoxIcn" src={InsertGifIcon}></img>
                    </div>

                    <div className="askAQuestionTweet">
                        <img className="btnBoxIcn" src={InsertAddQuestion}></img>
                    </div>

                    <div className="insertEmoji">
                        <img className="btnBoxIcn" src={InsertEmojiIcon}></img>
                    </div>

                    <div className="createSchedule">
                        <img className="btnBoxIcn" src={InsertSchedule}></img>
                    </div>

                    <div className="characterLimitationIcon">
                    </div>

                    <div className="addAnotherTweetButton">
                    </div>
                    <div className="shareTweetButton">
                        <button className="tweetBtn" href="#">Tweet{' '}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default PostTweetBox;