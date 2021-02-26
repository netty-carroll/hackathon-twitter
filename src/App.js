import './App.css';
import Navbar from './components/navbar';
import CentreTop from './components/centretop';
import Widgets from './components/widgets';
import Messages from './components/messages';

function App() {
  return (
    <div className="app">      
      <div className="navbarClass">
        <Navbar />
      </div>
      <div className="centretopClass">
        <CentreTop />
      </div>
      <div className="widgetsClass">
        <Widgets />
      </div>
      <div className="messagesClass">
        <Messages />
      </div>
    </div>
  );
}
export default App;