import './centretop.css';
import TopTweetsIcon from './images/topTweets.svg';
import Tweetbox from './tweetbox';
import Post from './post'
import Post2 from './post2'
import Post3 from './post3'

const CentreTopTweets = () => {
    return(
        <div className="centreTopTweets">
            <div className="homeHeading">
                <h2>Home<img className="topTweetSearchIcon" src={TopTweetsIcon}></img></h2>
                {/* <img className="topTweetSearchIcon" src={TopTweetsIcon}></img> */}
            </div>
           <Tweetbox />
           <Post />
           <Post2 />
           <Post3 />
        </div>
    )
}
export default CentreTopTweets;
