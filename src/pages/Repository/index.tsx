import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header, RepositoryInfo } from './styles';
import logoImg from '../../assets/githubLogo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FunctionComponent = () => {
  // const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/22779227?s=400&u=bd374c5009fd9a146fc8a10fcd63020ca1ea34bb&v=4"
            alt="bla bla"
          />
          <div>
            <strong>AmauriOliveira/AmauriOliveira</strong>
            <p>Descricão</p>
          </div>
        </header>
        <ul />
      </RepositoryInfo>
    </>
  );
};

export default Repository;
