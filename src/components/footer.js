import './footer.css';

const TwitterFooter = () => {
    return(
        <div className="footerDiv">
            <ul>
                <li><a href="https://twitter.com/en/tos" target="_blank">
                    Terms of Service</a></li>
                <li><a href="https://twitter.com/en/privacy" target="_blank">
                    Privacy Policy</a></li>
                <li><a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank">
                    Cookie Policy</a></li>
                <li><a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" target="_blank">
                    Ads Info</a></li>
                <li><p>2021 Hackathon, Twitter</p></li>
            </ul>   
        </div>
    )
}
export default TwitterFooter;