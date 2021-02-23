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
            <ul>
                <li>Home</li>
                <li><img src={Explore} alt="Explore" /></li>
                <li><img src={Notification} alt="Notification" /></li>
                <li><img src={Messages} alt="Messages" /></li>
                <li><img src={Bookmarks} alt="Bookmarks" /></li>
                <li><img src={Lists} alt="Lists" /></li>
                <li><img src={Profile} alt="Profile" /></li>
                <li><img src={More} alt="More" /></li>
            </ul>
        </nav>
    )
}
export default Navbar;