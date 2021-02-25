import React, { Component } from 'react';
import './rightSectMore.css'

class RightSectMore extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        }
    }
    render() {
        return (
            
            <div>
                <button className="rsMoreBtn" onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                    More
                </button>

                {this.state.showMenu
                    ? (
                        <div className='moreTerms'>
                            <button>About</button>
                            <button>Status</button>
                            <button>Twitter For Business</button>
                            <button>Developers</button>
                        </div>
                    )
                    : (null)
                }
            </div>
        );
    }
}
export default RightSectMore;