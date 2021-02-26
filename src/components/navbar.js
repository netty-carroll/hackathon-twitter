import CurrentProfileDisplay from './navbarProfileSection';
import './navbar.css';
import Notification from '@material-ui/icons/NotificationsNone';
import Explore from "@material-ui/icons/Search";
import Messages from '@material-ui/icons/MailOutline';
import Bookmarks from '@material-ui/icons/BookmarkBorder'; 
import Lists from '@material-ui/icons/ListAlt';
import Profile from '@material-ui/icons/PermIdentity';
import Home from "@material-ui/icons/Home";
import Bird from './images/bird.svg'
import More from "./menu"
import MoreIcon from '@material-ui/icons/MoreHoriz';

const Navbar = () => {
    return (
        <nav className="sidebarWrap">
            <div className='birdWrap'>
                <img className='twitLogo' src={Bird} alt="twitlogo"/>
            </div>

            <ul className="sidebar">      
                <li><Home/><span className="words">Home</span></li>
                <li><Explore/><span className="words">Explore</span></li>
                <li><Notification/><span className="words">Notification</span></li>
                <li><Messages/><span className="words">Messages</span></li>
                <li><Bookmarks/><span className="words">Bookmarks</span></li>
                <li><Lists/> <span className="words">Lists</span></li>
                <li><Profile/><span className="words">Profile</span></li>
                <li className='moreSect'><MoreIcon/><More /></li>
            </ul>

            <div className='buttonWrap'>
                <button className="tweetBtnNav" href="#">Tweet{' '}</button>
            </div>

            <div className="profileDisplayAndSettings">
                <CurrentProfileDisplay />
            </div>
        </nav>
    )
}
export default Navbar;