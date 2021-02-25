import './tweetbox.css';
import InsertGifIcon from './images/gifAdd.svg';
import InsertEmojiIcon from './images/emojiAdd.svg';
import InsertMediaIcon from './images/imageAdd.svg';
import InsertAddQuestion from './images/graphAdd.svg';
import InsertSchedule from './images/scheduleAdd.svg';

const PostTweetBox = () => {
    return(
        <div className="tweetBoxFull">
            <div className="tweetBox">
                 <div className="profileBox"> {/* this box is 100% height, use inspect on twitter to check */}
                    <div className="profileImage">
                        
                    </div>
                </div>

                <div className="inputBox">
                    {/* input box to write a tweet, include 'What's happening?' in the box */}
                </div>

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
        </div>
    )
}
export default PostTweetBox;