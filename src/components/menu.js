import React, { Component } from 'react';
import './menu.css'
import Topics from './images/topics.svg'
import Moments from './images/moments.svg'
import Newsletter from './images/newsletters.svg'
import TwitAds from './images/twitterAds.svg'
import Analytics from './images/analytics.svg'
import Settings from './images/privacySettings.svg'
import HelpCenter from'./images/helpCenter.svg'
import Display from './images/displayBrush.svg'
import KeyboardShorts from './images/keyboardShortcuts.svg'

class More extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        }
    }
    render() {
        return (
            
            <div>
                <button className="moreBtn" onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                    More
                </button>

                {this.state.showMenu
                    ? (
                        <div className='menuTop'>

                            <button id="topics"><img src={Topics}></img>Topics</button>
                            <button id='moments'><img src={Moments}></img>Moments</button>
                            <button id='newsletters'><img src={Newsletter}></img>Newsletters</button>
                            <button id='twitAdds'><img src={TwitAds}></img>Twitter Ads</button>
                            <button id='analytics'><img src={Analytics}></img>analytics</button>
                            <button id='settingsAndPriv'><img src={Settings}></img>Settings and Privacy</button>
                            <button id='helpCenter'><img src={HelpCenter}></img>Help Center</button>
                            <button id='display'><img src={Display}></img>Display</button>
                            <button id='keyboardShortcuts'><img src={KeyboardShorts}></img>Keyboard Shortcuts</button>

                        </div>
                    )
                    : (null)
                }
            </div>
        );
    }
}
export default More;