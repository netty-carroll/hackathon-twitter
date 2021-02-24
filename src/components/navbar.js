import './navbar.css';
import Notification from './images/bell.svg'
import Explore from './images/hashtag.svg'
import Messages from './images/mail.svg'
import Bookmarks from './images/bookmark-regular.svg' 
import Lists from './images/list-solid.svg'
import Profile from './images/user-solid.svg'
import More from './images/comment-dots-regular.svg'
import Home from './images/home-solid.svg'
import Bird from './images/bird.svg';
const Navbar = () => {
    return (
        <nav>
            <img className="birdLogo" src={Bird} alt="twitlogo"/>
            <ul className="sidebar">
                <li><img src={Home} alt="Home" />Home</li>
                <li><img src={Explore} alt="Explore" />Explore</li>
                <li><img src={Notification} alt="Notification" />Notification</li>
                <li><img src={Messages} alt="Messages" />Messages</li>
                <li><img src={Bookmarks} alt="Bookmarks" />Bookmarks</li>
                <li><img src={Lists} alt="Lists" />Lists</li>
                <li><img src={Profile} alt="Profile" />Profile</li>
                <li><img src={More} alt="More" />More</li>
            </ul>
            <button className="tweetBtnNav" href="#">Tweet{' '}</button>
        </nav>
    )
}
export default Navbar;