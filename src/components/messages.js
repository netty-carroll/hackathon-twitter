import './messages.css';
import NewMessageSVG from './images/emojiAdd.svg';
import ExpandSVG from './images/mail.svg';

const Messages = () => {
    return(
        <div className="bottomLayer">
             <div className="boxBorder">   {/*think I need to add another box behind the messagesBox with the color rgb(107, 125, 140) */}
                <div className="messagesBox">
                    <div className="messagesBoxContent">
                        <div className="messagesTitle">
                            <h1>Messages</h1>
                        </div>
                        <div className="messagesIcons">
                            <div className="twoBoxIcons">
                                <div className="newMessageIcon">
                                    <img className="newMsgIcon" src={NewMessageSVG}></img>
                                </div>
                                <div className="expandBoxIcon">
                                    <img className="expIcon" src={ExpandSVG}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Messages;