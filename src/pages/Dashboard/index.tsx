/* eslint-disable camelcase */
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Repository from '../Repository';

import logoImg from '../../assets/githubLogo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FunctionComponent = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GitHubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  async function handAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault(); // suprimir comportamento padrão do form

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
      return; // encerrar a função
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      setNewRepo(''); // limpar input
      setInputError('');

      const repository = response.data;

      setRepositories([...repositories, repository]);
    } catch (error) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="autor/repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={30} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
