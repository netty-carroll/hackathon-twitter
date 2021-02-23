import './navbar.css';
import Notification from './Bell.svg'
import Explore from './hashtag.svg'
import Messages from './Mail.svg'
import Bookmarks from './bookmark-regular.svg' 
import Lists from './list-solid.svg'
import Profile from './user-solid.svg'
import More from './comment-dots-regular.svg'

const Navbar = () => {
    return (
        <nav>
            <ul className="sidebar">
                <li>Home</li>
                <li><img src={Explore} alt="Explore" />Explore</li>
                <li><img src={Notification} alt="Notification" />Notification</li>
                <li><img src={Messages} alt="Messages" />Messages</li>
                <li><img src={Bookmarks} alt="Bookmarks" />Bookmarks</li>
                <li><img src={Lists} alt="Lists" />Lists</li>
                <li><img src={Profile} alt="Profile" />Profile</li>
                <li><img src={More} alt="More" />More</li>
            </ul>
            <button className="tweetBtn" href="#">Tweet{' '}</button>
        </nav>
    )
}
export default Navbar;