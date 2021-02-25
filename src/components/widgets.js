import React from 'react'
import Searchbar from './searchbar';
import WhatsHappening from './whatsHappening';
import WhoToFollow from './whotofollow';
import RightSectMore from './rightSectMore';
import TwitterFooter from './footer'
import SearchIcon from '@material-ui/icons/Search';
function widgets() {
    return (
        <div className="widgets">
          <div className="widgets_input">
          <SearchIcon className="widgets_searchIcon" />
          <input placeholder="Search Twitter" type="text" />
          </div>
        <div className ="moveRight">
        <WhatsHappening />
        <WhoToFollow />
        <TwitterFooter />
        <RightSectMore /> 

        </div>            
        </div>
    )
}

export default widgets;

