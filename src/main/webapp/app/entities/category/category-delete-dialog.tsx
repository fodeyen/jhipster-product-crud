import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity, deleteEntity } from './category.reducer';

export const CategoryDeleteDialog = (props: RouteComponentProps<{ id: string }>) => {
  const [loadModal, setLoadModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
    setLoadModal(true);
  }, []);

  const categoryEntity = useAppSelector(state => state.category.entity);
  const updateSuccess = useAppSelector(state => state.category.updateSuccess);

  const handleClose = () => {
    props.history.push('/category');
  };

  useEffect(() => {
    if (updateSuccess && loadModal) {
      handleClose();
      setLoadModal(false);
    }
  }, [updateSuccess]);

  const confirmDelete = () => {
    dispatch(deleteEntity(categoryEntity.id));
  };

  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="categoryDeleteDialogHeading">
        SİLME İŞLEMİ
      </ModalHeader>
      <ModalBody id="ayrotekApp.category.delete.question">
        Bu kategori silinsin mi? <b>{categoryEntity.categoryName}</b>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; İPTAL
        </Button>
        <Button id="jhi-confirm-delete-category" data-cy="entityConfirmDeleteButton" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp; SİL
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CategoryDeleteDialog;