import './App.css';
import Navbar from './components/navbar';
import CentreTop from './components/centretop';
import Widgets from './components/widgets';
import Messages from './components/messages';

function App() {
  return (
    <div className="app">      
      
      <Navbar />
      <CentreTop />
      <Widgets />
      <Messages />
    
    </div>
  );
}
export default App;