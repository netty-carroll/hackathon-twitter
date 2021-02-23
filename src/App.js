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

      </section>

      <section className="right">
        <Searchbar />
      </section>
    </div>

  );
}
export default App;