import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import TwitterFooter from './components/footer';
import WhatsHappening from './components/whatsHappening';
import WhoToFollow from './components/whotofollow';
import PostTweetBox from './components/tweetbox';
import CentreTopTweets from './components/centretop';
import Messages from './components/messages';
import RightSectMore from './components/rightSectMore'

function App() {
  return (
    <div className="body">      
      <section className="left">
        <Navbar />
      </section>
      
      <section className="centre">
        <section className="topTweets">
          <CentreTopTweets />
        </section>
      
        <section className="posts">
          <PostTweetBox />
        </section>
      
        <section className="tweets">
        </section>
      </section>

      <section className="right">
        <Searchbar />
        <WhatsHappening />
        <WhoToFollow />
        <TwitterFooter />
        <RightSectMore />
      </section>

      <section className="stickyBottom">
        <Messages />
      </section>
    </div>
  );
}
export default App;