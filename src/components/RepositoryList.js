import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RepositoryList.css';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/opeakoki/repos');
        setRepositories(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const handleSearch = () => {
    const filteredRepos = repositories.filter(repo =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRepositories(filteredRepos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading ? (
        <p>Loading repositories...</p>
      ) : (
        <ul>
          {repositories.map(repo => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepositoryList;