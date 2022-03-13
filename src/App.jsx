import Install from './components/Install';
//import Home from './components/Home';
import BunMinter from './components/BunMinter';

function App() {
  if (window.ethereum) {
    return <BunMinter />
  } else {
    return <BunMinter />
  }
}

export default App;