import './footer.css';

const TwitterFooter = () => {
    return(
        <div className="footerDiv">
            <nav className="footerNavCSS">
                <a className="termsOfService" href="https://twitter.com/en/tos" target="_blank">Terms of Service</a>
                <a className="privacyPolicy" href="https://twitter.com/en/privacy" target="_blank">Privacy Policy</a>
                <a className="cookiePolicy" href="https://help.twitter.com/en/rules-and-policies/twitter-cookies" target="_blank">Cookie Policy</a>
                <a className="adsInformation" href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" target="_blank">Ads info</a>
                <div className="footerMoreButton">
                    
                </div>
                <div className="hackathonTwitterNameFooter">
                    <p>2021 Hackathon, Twitter</p>
                </div>                
            </nav>                       
        </div>
    )
}
export default TwitterFooter;