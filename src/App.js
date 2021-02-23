import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
    <Navbar />
    <button  className="twitMsg" href="#">message{' '}</button>
    <button className="tweetBtn" href="#">Tweet{' '}</button>
  </div>

    
  );
}
export default App;