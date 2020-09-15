import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Header } from './styles';
import logoImg from '../../assets/githubLogo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FunctionComponent = () => {
  // const { params } = useRouteMatch<RepositoryParams>();
  return (
    <Header>
      <img src={logoImg} alt="GitHub Explorer" />
      <Link to="/dashboard">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
