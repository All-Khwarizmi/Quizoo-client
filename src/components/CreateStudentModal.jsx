import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { ADD_STUDENT } from '../mutations/memoMutations';
import Spinner from '../components/Spinner';

const CreateStudentModal = ({ user }) => {
  const [show, setShow] = useState(true);
  const [addStudent, { loading, error, data }] = useMutation(ADD_STUDENT);

  {
    /*  */
  }

  const handleClose = () => {
    addStudent({
      variables: {
        name: user.name,
        userName: user.nickname,
        email: user.email,
      },
    });
    console.log(user.name, user.nickname, user.email);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Link to={''}>
        <Button variant='primary' onClick={handleShow}>
          Launch demo modal
        </Button>
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome on board {user.nickname} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          Close this window to get the upmost lastest QuizoO content and 50 MemoPoints
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/fiches'}>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateStudentModal;
