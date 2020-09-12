/* eslint-disable camelcase */
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/githubLogo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FunctionComponent = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault(); // suprimir comportamento padrão do form

    const response = await api.get(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
  }
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/22779227?s=460&u=bd374c5009fd9a146fc8a10fcd63020ca1ea34bb&v=4"
            alt="Amauri Oliveira"
          />
          <div>
            <strong>AmauriOliveira/amaurioliveira</strong>
            <p>
              Lorem ipsum Proin suscipit luctus orci placerat fringilla. Donec
              hendrerit laoreet risus eget adipiscing. Suspendisse in urna
              ligula, a volutpat mauris. Sed enim mi, adipiscing eu pulvinar
              vel, sodales vitae dui.
            </p>
          </div>
          <FiChevronRight size={30} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
