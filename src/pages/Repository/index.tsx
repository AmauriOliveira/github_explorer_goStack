/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/githubLogo.svg';

interface RepositoryParams {
  repository: string;
}
interface RepositoryInterface {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
interface IssueInterface {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FunctionComponent = () => {
  const [repository, setRepository] = useState<RepositoryInterface | null>(
    null,
  );
  const [issues, setIssues] = useState<IssueInterface[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a
            key={issue.id}
            href={issue.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={30} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
