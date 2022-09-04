import logo from './logo.svg';
import './App.css';
// import { FakeWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets';
import { TorusWalletAdapter } from '@solana/wallet-adapter-torus';
import { useState } from 'react';

function App() {
  // const login = () => {
  //   const wallet = new FakeWalletAdapter();
  // }
  const  [ wallet, setWallet ] = useState();
  const tlogin = ()=> {
    const twallet = new TorusWalletAdapter({ params: {network: "devnet", buildEnv:"testing"} })
    console.log(twallet);
    twallet.connect();
    setWallet(twallet);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={tlogin}>Login</button>
      </header>
    </div>
  );
}

export default App;
