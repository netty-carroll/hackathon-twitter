import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className="sidebar">
                <li>Home</li>
                <li>Explore</li>
                <li>Notifications</li>
                <li>Messages</li>
                <li>Bookmarks</li>
                <li>Lists</li>
                <li>Profile</li>
                <li>More</li>
            </ul>
            <button className="tweetBtn" href="#">Tweet{' '}</button>
        </nav>
    )
}
export default Navbar;