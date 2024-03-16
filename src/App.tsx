import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { BowlerList} from "./bowlers";

function App() {
  return (
    <div className="App">
      <Header />
        <BowlerList />
    </div>
  );
}

export default App;
