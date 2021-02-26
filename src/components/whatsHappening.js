import './whatsHappening.css';

const WhatsHappening = () => {
    return(
        <div className="whatsHapSection">
            <div className="whatsHapHeader">
                <h2>What's happening</h2>
            </div>  
            <div className="firstHappening">
                <h2> News - Last night </h2>
                <p>US carries out airstrike on</p>
                <p>Iranian-backed militia facilities in</p>
                <p>Syria</p>
                <img src="https://pbs.twimg.com/semantic_core_img/1365105055041392642/fbJxJRoD?format=jpg&name=240x240" />
                </div>         

            <div className="whatsHapShowMore">
                <a href="">Show more</a>
            </div>
        </div>
    )
}
export default WhatsHappening;