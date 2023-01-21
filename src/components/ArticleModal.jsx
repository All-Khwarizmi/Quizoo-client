import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ArticleModal = () => {
const [show, setShow] = useState(true);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to QuizoO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Our main focus in QuizoO is to <strong>enhance memorization</strong>{' '}
            through what research in neuroscience consider best for learning.{' '}
          </p>
          <p>
            In this page you can learn more about this topic by reading an
            article (5 minutes reading) and then taking a pop quiz.{' '}
          </p>
          <p>
            This is just a demo, if you want to keep learning, please sign up.
          </p>
          <strong>Happy quizzing</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ArticleModal;
