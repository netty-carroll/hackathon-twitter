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
            <div className='birdWrap'>
            <img className='twitLogo' src={Bird} alt="twitlogo"/>
            </div>

            <ul className="sidebar">
      
                <li><img src={Home} alt="Home"/><span className="words">Home</span></li>
                <li><img src={Explore} alt="Explore" /><span className="words">Explore</span></li>
                <li><img src={Notification} alt="Notification" /><span className="words">Notification</span></li>
                <li><img src={Messages} alt="Messages" /><span className="words">Messages</span></li>
                <li><img src={Bookmarks} alt="Bookmarks" /><span className="words">Bookmarks</span></li>
                <li><img src={Lists} alt="Lists" /><span className="words">Lists</span></li>
                <li><img src={Profile} alt="Profile" /><span className="words">Profile</span></li>
                <li><img src={More} alt="More" /><span className="words">More</span></li>
            </ul>


            <div className='buttonWrap'>
            <button className="tweetBtnNav" href="#">Tweet{' '}</button>
            </div>

        </nav>
    )
}
export default Navbar;