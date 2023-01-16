import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Question from './Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from '@apollo/client';
import { UPDATE_STUDENT } from '../mutations/memoMutations';

const CardModal = ({ numberOfQuestions, newQuestion, id, number }) => {
  const [show, setShow] = useState(true);
  const [succes, setSucess] = useState(false);
  const [correctAnswer] = useState(newQuestion.correctAnswer);
  const [answerA] = useState(newQuestion.answerA);
  const [answerB] = useState(newQuestion.answerB);
  const [answerC] = useState(newQuestion.answerC);
  const [answerD] = useState(newQuestion.answerD);

  // harcoded student score use useContext instead
  const score = 80;
  const [updateStudent, { loading, error, sata }] = useMutation(UPDATE_STUDENT);
  const clickA = () => {
    if (answerA === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      // Once cliked disabled it somehow
      updateStudent({
        variables: { score: score + 30, id: '63c2de4c639da3634af19395' },
      });
    } else {
      showToastMessageFail();
    }
  };
  const clickB = () => {
    if (answerB === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      // Once cliked disabled it somehow
      updateStudent({
        variables: { score: score + 30, id: '63c2de4c639da3634af19395' },
      });
    } else {
      showToastMessageFail();
    }
  };
  const clickC = () => {
    if (answerC === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      // Once cliked disabled it somehow
      updateStudent({
        variables: { score: score + 30, id: '63c2de4c639da3634af19395' },
      });
    } else {
      showToastMessageFail();
    }
  };
  const clickD = () => {
    if (answerD === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      // Once cliked disabled it somehow
      updateStudent({
        variables: { score: score + 30, id: '63c2de4c639da3634af19395' },
      });
    } else {
      showToastMessageFail();
    }
  };
  // console.log(newQuestion);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setSucess(false);
  };

  const showToastMessageSucess = () => {
    toast('🦄 Wow so easy!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const showToastMessageFail = () => {
    toast.warn('🥵 Tray again!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />

      <Modal backdrop={true} show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Question {number} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container text-center'>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div style={{ backgroundColor: 'lightgrey' }}>
                    <p className='question'> {newQuestion.question} </p>
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{}</h5>
                    <div className='container text-center'>
                      <div className='row'>
                        <div className='col'>
                          {' '}
                          {succes ? null : (
                            <button
                              onClick={clickA}
                              className='btn btn-primary'
                            >
                              {newQuestion.answerA}
                            </button>
                          )}{' '}
                        </div>
                        <div className='col'>
                          {' '}
                          {succes ? null : (
                            <button
                              onClick={clickB}
                              className='btn btn-primary'
                            >
                              {newQuestion.answerB}
                            </button>
                          )}
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col'>
                          {' '}
                          {succes ? null : (
                            <button
                              onClick={clickC}
                              className='btn btn-primary'
                            >
                              {newQuestion.answerC}
                            </button>
                          )}{' '}
                        </div>
                        <div className='col'>
                          {' '}
                          {succes ? null : (
                            <button
                              onClick={clickD}
                              className='btn btn-primary'
                            >
                              {newQuestion.answerD}
                            </button>
                          )}{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/fiches/`}>
            <Button variant='secondary'>Stop</Button>
          </Link>
          {succes ? (
            <Link to={`/fiches/:${id}/${parseInt(number) + 1}`}>
              <Button variant='primary' onClick={handleShow}>
                Next Question
              </Button>
            </Link>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardModal;
