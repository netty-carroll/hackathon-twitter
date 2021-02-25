import React, { Component } from 'react';
import './menu.css'

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
                <button onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                    More
                </button>

                {this.state.showMenu
                    ? (
                        <div className='menuTop'>
                            <button id="topics">Topics</button>
                            <button id='moments'>Moments</button>
                            <button>Newsletters</button>
                            <button>Twitter Ads</button>
                            <button>Analytics</button>
                            <button>Settings and privacy</button>
                            <button>Help Center</button>
                            <button>Display</button>
                            <button>Keyboard shortcuts</button>
                        </div>
                    )
                    : (null)
                }
            </div>
        );
    }
}
export default More;