import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <div className="space"></div>
        <footer className="footer_container">
          <div className="footer_inline">
            <div className="footer_block">
              <h6>
                <i className="material-icons">bookmark</i>Popüler Etiketler
              </h6>
              <ul className="tags mscroll" data-mcs-theme="minimal-dark">
                <li>
                  <a href="#">JHIPSTER</a>
                </li>
                <li>
                  <a href="#">JAVA</a>
                </li>
                <li>
                  <a href="#">SPRING BOOT</a>
                </li>
                <li>
                  <a href="#">REACT</a>
                </li>
                <li>
                  <a href="#">TYPESCRIPT</a>
                </li>
                <li>
                  <a href="#">SWAGGER</a>
                </li>
                <li>
                  <a href="#">JPA</a>
                </li>
                <li>
                  <a href="#">SPRING SECURITY</a>
                </li>
                <li>
                  <a href="#">JDL</a>
                </li>
              </ul>
            </div>
            <div className="footer_block">
              <h6>
                <i className="material-icons">new_releases</i>UYGULAMA
              </h6>
              <p className="mscroll" data-mcs-theme="minimal-dark">
                JHIPSTER İLE FULLSTACK BİR UYGULAMA
              </p>
            </div>
            <div className="footer_block">
              <ul className="footer_buttons">
                <li>
                  <a href="#">
                    <i className="material-icons">arrow_upward</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom">
            <h6>Copyright 2022 FURKAN ÖDEYEN</h6>
          </div>
        </footer>
        <div className="space"></div>
      </Col>
    </Row>
  </div>
);

export default Footer;
