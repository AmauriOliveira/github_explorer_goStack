import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/githubLogo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
  const [repositories, setRepositories] = useState([]);

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
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
