import Install from './components/Install';
//import Home from './components/Home';
import BunMinter from './components/BunMinter';
import MintColor from './components/MintColor';
import WalletBalance from './components/WalletBalance';

function App() {
  if (window.ethereum) {
    return <MintColor />
  } else {
    return <Install />
  }
}

export default App;