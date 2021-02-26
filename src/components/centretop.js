import './centretop.css';
import TopTweetsIcon from './images/topTweets.svg';
import Tweetbox from './tweetbox';
import Post from './post'

const CentreTopTweets = () => {
    return(
        <div className="centreTopTweets">
            <div className="homeHeading">
                <h2>Home</h2>
                <img className="topTweetSearchIcon" src={TopTweetsIcon}></img>
            </div>
           <Tweetbox />
           <Post />
        </div>
    )
}
export default CentreTopTweets;
