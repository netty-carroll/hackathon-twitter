import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="body">      
      <section className="left">
        <Navbar />
      </section>
      
      <section className="centre">
      <section className="topTweets"><h1>Home</h1></section>
      <section className="posts">
      <button className="tweetBtn" href="#">Tweet{' '}</button>
      </section>
      <section className="tweets"></section>
      </section>

      <section className="right">
        <Searchbar />
      </section>
    </div>

  );
}
export default App;