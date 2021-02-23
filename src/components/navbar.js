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
                <li><img src={Explore} alt="Explore" /><span className="words">Explore</span></li>
                <li><img src={Notification} alt="Notification" /><span className="words">Notification</span></li>
                <li><img src={Messages} alt="Messages" /><span className="words">Messages</span></li>
                <li><img src={Bookmarks} alt="Bookmarks" /><span className="words">Bookmarks</span></li>
                <li><img src={Lists} alt="Lists" /><span className="words">Lists</span></li>
                <li><img src={Profile} alt="Profile" /><span className="words">Profile</span></li>
                <li><img src={More} alt="More" /><span className="words">More</span></li>
            </ul>
            <button className="tweetBtn" href="#">Tweet{' '}</button>
        </nav>
    )
}
export default Navbar;