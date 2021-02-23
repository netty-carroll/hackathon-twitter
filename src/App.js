import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import TwitterFooter from './components/footer';

function App() {
  return (
    <div>      
      <section className="left">
        <Navbar />
      </section>

      <section className="centre">

      </section>

      <section className="right">
        <Searchbar />
        <TwitterFooter />
      </section>
    </div>

  );
}
export default App;