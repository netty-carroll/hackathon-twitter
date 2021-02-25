import './centretop.css';
import TopTweetsIcon from './images/topTweets.svg';

const CentreTopTweets = () => {
    return(
        <div className="centreTopTweets">
            <div className="homeHeading">
                <h1>Home</h1>
                <img className="topTweetSearchIcon" src={TopTweetsIcon}></img>
            </div>
           
        </div>
    )
}
export default CentreTopTweets;