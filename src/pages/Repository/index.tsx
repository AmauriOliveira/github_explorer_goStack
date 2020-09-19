import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
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
        <Link to="/">
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
        <ul>
          <li>
            <strong>1800</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>48</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>67</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link key="0" to="/">
          <div>
            <strong>A</strong>
            <p>B</p>
          </div>
          <FiChevronRight size={30} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
