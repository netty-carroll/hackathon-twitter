import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="body">
      
      <section className="left">
      
      </section>
      <section className="centre"><button className="tweetBtn" href="#">Tweet{' '}</button>
        <Searchbar />
      </section>
      <section className="right">

      </section>
   
   
  </div>
  );
}
export default App;