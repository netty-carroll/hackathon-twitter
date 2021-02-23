import './App.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';

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
      </section>
    </div>

  );
}
export default App;