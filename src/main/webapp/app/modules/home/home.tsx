import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <h2>{account?.login ? 'HOŞGELDİN,' + account.login : '🤗😑😏'}</h2>
        {account?.login ? (
          <div>
            <Alert color="success">GİRİŞ BAŞARILI</Alert>
          </div>
        ) : (
          <div>
            <Alert color="danger">GİRİŞ YAPINIZ</Alert>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
