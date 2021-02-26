import './whatsHappening.css';

const WhatsHappening = () => {
    return (
        <div className="whatsHapSection">
            <div className="whatsHapHeader">
                <h3>What's happening</h3>
            </div>
            <div className="firstHappening">
                <h2> News - Last night </h2>
                <div className="pWrap">
                <p>US carries out airstrike on<br></br>
                Iranian-backed militia facilities in<br></br>
                Syria</p>
                <img className="whImg" src="https://pbs.twimg.com/semantic_core_img/1365105055041392642/fbJxJRoD?format=jpg&name=240x240" />
                </div>
                <h2>Trending with <span className="trend">Biden</span></h2>
                
            </div>
            <div className="secondHappening">
                <h2>Trending in United Kingdom</h2>
                <p>Mr Potato Head</p>
                <h2>Trending with <span className="trend">Hasbro</span></h2>
            </div>
            <div className="whatsHapShowMore">
                <a href="">Show more</a>
            </div>
        </div>
    )
}
export default WhatsHappening;