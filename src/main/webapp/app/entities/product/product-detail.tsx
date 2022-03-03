import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './product.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const ProductDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const productEntity = useAppSelector(state => state.product.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productDetailsHeading">ÜRÜN DETAY</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="productId">Id</span>
          </dt>
          <dd>{productEntity.productId}</dd>
          <dt>
            <span id="productCode">Ürün Kodu</span>
          </dt>
          <dd>{productEntity.productCode}</dd>
          <dt>
            <span id="productName">Ürün Adı</span>
          </dt>
          <dd>{productEntity.productName}</dd>
          <dt>
            <span id="stockQuantity">Stok Miktarı</span>
          </dt>
          <dd>{productEntity.stockQuantity}</dd>
          <dt>
            <span id="unitPrice">Birim Fiyatı</span>
          </dt>
          <dd>{productEntity.unitPrice}</dd>
          <dt>Marka</dt>
          <dd>{productEntity.brandId ? productEntity.brandId.brandName : ''}</dd>
          <dt>Kategori</dt>
          <dd>{productEntity.categoryId ? productEntity.categoryId.categoryName : ''}</dd>
        </dl>
        <Button tag={Link} to="/product" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">GERİ</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/product/${productEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">DÜZENLE</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetail;
