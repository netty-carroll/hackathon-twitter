import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import TwitterFooter from './components/footer';
import WhatsHappening from './components/whatsHappening';

function App() {
  return (
    <div className="body">      
      <section className="left">
        <Navbar />
      </section>
      
      <section className="centre">
      <section className="topTweets"></section>
      <section className="posts"></section>
      <section className="tweets"></section>
      </section>

      <section className="right">
        <Searchbar />
        <WhatsHappening />
        <TwitterFooter />
      </section>
    </div>

  );
}
export default App;