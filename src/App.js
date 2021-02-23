import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div>
      <section>
        <Navbar />
        <button className="twitMsg" href="#">message{' '}</button>
        <button className="tweetBtn" href="#">Tweet{' '}</button>
      </section>
      <section className="centre"><button className="tweetBtn" href="#">Tweet{' '}</button>
        <Searchbar />
      </section>
    </div>
    <Navbar />  
  </div>
  );
}
export default App;