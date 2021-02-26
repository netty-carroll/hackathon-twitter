import './whotofollow.css';
import {Avatar} from "@material-ui/core"

const WhoToFollow = () => {
    return(
        <div className="whoToFollowSection">
            <div className="whoToFollowHeader">
                <h2>Who to follow</h2>
            </div>
            <div className="lfc">
                <div className="iconAndWriting">
                <Avatar className="lfcAvatar"src="https://pbs.twimg.com/profile_images/1338403510463983616/OKTADee9_400x400.png"/>
                <h2>Liverpool FC <br/><span className="followUser">@LFC</span></h2>
                </div>
                <button className ="follow1">Follow</button>
            
            </div>
            <div className="cher">
                <div className="iconAndWriting">
                <Avatar className="cherAvatar" src="https://pbs.twimg.com/profile_images/1201634247775264768/MxO2TCOj_400x400.jpg"/>
                <h2>Cher<br/><span className="followUser">@Cher</span></h2>
                </div>
                <button className ="follow1">Follow</button>
            </div>

            <div className="whoToFollowShowMore">
                <a href="">Show more</a>
            </div>
        </div>
    )
}
export default WhoToFollow;