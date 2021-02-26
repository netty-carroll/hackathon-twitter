import './whatsHappening.css';
import whMenu from '@material-ui/icons/MoreHoriz';

const WhatsHappening = () => {
    return (
        <div className="whatsHapSection">
            <div className="whatsHapHeader">
                <h3>What's happening</h3>
            </div>
            <div className="firstHappening">
                <h2> News - Last night </h2>
                <p>US carries out airstrike on</p>
                <p>Iranian-backed militia facilities in</p>
                <p>Syria</p>
                <h2>Trending with <span className="trend">Biden</span></h2>
                <img src="https://pbs.twimg.com/semantic_core_img/1365105055041392642/fbJxJRoD?format=jpg&name=240x240" />
            </div>
            <div className="secondHappening">
                <h2>Trending in United Kingdom</h2>
                <p>Mr Potato Head <whMenu /></p>
                <h2>Trending with <span className="trend">Hasbro</span></h2>
            </div>
            <div className="whatsHapShowMore">
                <a href="">Show more</a>
            </div>
        </div>
    )
}
export default WhatsHappening;