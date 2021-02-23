import './navbar.css';
import Notification from './Bell.svg'
import Explore from './hashtag.svg'
import Messages from './Mail.svg'
import Bookmarks from './bookmark-regular.svg' 
import Lists from './list-solid.svg'
import Profile from './user-solid.svg'
import More from './comment-dots-regular.svg'
import Home from './home-solid.svg'
import Bird from './bird.svg';
const Navbar = () => {
    return (
        <nav>
            <img src={Bird} alt="twitlogo"/>
            <ul className="sidebar">
                <li><img src={Home} alt="Home" /></li>
                <li><img src={Explore} alt="Explore" /></li>
                <li><img src={Notification} alt="Notification" /></li>
                <li><img src={Messages} alt="Messages" /></li>
                <li><img src={Bookmarks} alt="Bookmarks" /></li>
                <li><img src={Lists} alt="Lists" /></li>
                <li><img src={Profile} alt="Profile" /></li>
                <li><img src={More} alt="More" /></li>
            </ul>
            <button className="tweetBtn" href="#">Tweet{' '}</button>
        </nav>
    )
}
export default Navbar;