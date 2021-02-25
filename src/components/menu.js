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
                <button className="moreBtn" onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                    More
                </button>

                {this.state.showMenu
                    ? (
                        <div className='menuTop'>
                            <button id="topics">Topics</button>
                            <button id='moments'>Moments</button>
                            <button>Newsletters</button>
                            <button>Teitter Adds</button>
                            <button>analytics</button>
                            <button>settings and privacy</button>
                            <button>Help Center</button>
                            <button>Display</button>
                            <button>Keyboard Shortcuts</button>
                        </div>
                    )
                    : (null)
                }

            </div>
        );
    }
}

export default More;