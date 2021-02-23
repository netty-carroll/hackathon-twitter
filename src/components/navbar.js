import './navbar.css';
import Notification from './Bell.svg'


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Explore</li>
                <li><img src={Notification} alt="Notification" /></li>
                <li>Messages</li>
                <li>Bookmarks</li>
                <li>Lists</li>
                <li>Profile</li>
                <li>More</li>
            </ul>
        </nav>
    )
}
export default Navbar;