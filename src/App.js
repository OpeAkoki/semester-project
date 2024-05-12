import React from 'react';
import RepositoryList from './components/RepositoryList';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>My GitHub Repositories</h1>
      </header>
      <main>
        <RepositoryList />
      </main>
      <footer>
        <p>Akoki Opeyemi - altschool</p>
      </footer>
    </div>
  );
};

export default App;