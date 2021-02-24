import './tweetbox.css';

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
                    {/* //image button
			        //gif button
			        //poll button
			        //emoji button
			        //schedule button*/}

                    <button className="tweetBtn" href="#">Tweet{' '}</button>
                    
                    {/* include the extra buttons when you begin typing a tweet - the + button and the button that shows how many characters you have remaining */}
                </div>

            </div>
        </div>
    )
}
export default PostTweetBox;