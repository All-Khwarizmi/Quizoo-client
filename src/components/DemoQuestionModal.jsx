import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation, useQuery } from '@apollo/client';
import Spinner from './Spinner';

const DemoQuestionModal = ({ numberOfQuestions, newQuestion, id, number }) => {
  const [show, setShow] = useState(true);
  const [succes, setSucess] = useState(false);
  const [correctAnswer] = useState(newQuestion.correctAnswer);
  const [answerA] = useState(newQuestion.answerA);
  const [classA, setClassA] = useState('btn btn-primary');
  const [classB, setClassB] = useState('btn btn-primary');
  const [classC, setClassC] = useState('btn btn-primary');
  const [classD, setClassD] = useState('btn btn-primary');
  const [answerB] = useState(newQuestion.answerB);
  const [answerC] = useState(newQuestion.answerC);
  const [answerD] = useState(newQuestion.answerD);
  let link = `/demo/${parseInt(number) + 1}`;
  const [lastQuestionRedirect, setLastQuestionRedirect] = useState({ link });
  useEffect(() => {
    if (parseInt(number) === numberOfQuestions) {
      const link = '/';
      setLastQuestionRedirect({ link });
    } else {
      let link = `/demo/${parseInt(number) + 1}`;
      setLastQuestionRedirect({ link });
    }
  }, [number, id, numberOfQuestions]);

  const clickA = () => {
    if (answerA === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      setClassA('btn btn-success');
      setClassB('btn btn-danger');
      setClassC('btn btn-danger');
      setClassD('btn btn-danger');
    } else {
      showToastMessageFail();
      setClassA('btn btn-danger');
    }
  };
  const clickB = () => {
    if (answerB === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      setClassB('btn btn-success');
      setClassA('btn btn-danger');
      setClassC('btn btn-danger');
      setClassD('btn btn-danger');
      // Once cliked disabled it somehow
    } else {
      showToastMessageFail();
      setClassB('btn btn-danger');
    }
  };
  const clickC = () => {
    if (answerC === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      setClassC('btn btn-success');
      setClassB('btn btn-danger');
      setClassA('btn btn-danger');
      setClassD('btn btn-danger');
      // Once cliked disabled it somehow
    } else {
      showToastMessageFail();
      setClassC('btn btn-danger');
    }
  };
  const clickD = () => {
    if (answerD === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      setClassD('btn btn-success');
      setClassB('btn btn-danger');
      setClassC('btn btn-danger');
      setClassA('btn btn-danger');
      // Once cliked disabled it somehow
    } else {
      showToastMessageFail();
      setClassD('btn btn-danger');
    }
  };

  const calendar = createCalendar();
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setSucess(false);
    setClassA('btn btn-primary');
    setClassB('btn btn-primary');
    setClassC('btn btn-primary');
    setClassD('btn btn-primary');
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
                          {succes ? (
                            <button
                              disabled
                              onClick={clickA}
                              className={classA}
                            >
                              {newQuestion.answerA}
                            </button>
                          ) : (
                            <button onClick={clickA} className={classA}>
                              {newQuestion.answerA}
                            </button>
                          )}{' '}
                        </div>
                        <div className='col'>
                          {' '}
                          {succes ? (
                            <button disabled className={classB}>
                              {newQuestion.answerB}
                            </button>
                          ) : (
                            <button onClick={clickB} className={classB}>
                              {newQuestion.answerB}
                            </button>
                          )}
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col'>
                          {' '}
                          {succes ? (
                            <button disabled className={classC}>
                              {newQuestion.answerC}
                            </button>
                          ) : (
                            <button onClick={clickC} className={classC}>
                              {newQuestion.answerC}
                            </button>
                          )}{' '}
                        </div>
                        <div className='col'>
                          {' '}
                          {succes ? (
                            <button disabled className={classD}>
                              {newQuestion.answerD}
                            </button>
                          ) : (
                            <button onClick={clickD} className={classD}>
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
          <Link to={`/`}>
            <Button variant='secondary'>Stop</Button>
          </Link>
          {succes ? (
            <Link to={lastQuestionRedirect.link}>
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

const createCalendar = () => {
  // How many seconds in a day

  const dayInSeconds = 60 * 60 * 24;
  const weekInSeconds = 60 * 60 * 24 * 7;
  const monthInSeconds = 60 * 60 * 24 * (365 / 12);
  const calendar = {
    recallOne: Date.now() + 3 * dayInSeconds,
    recallTwo: Date.now() + weekInSeconds,
    recallThree: Date.now() + 2 * weekInSeconds,
    recallFour: Date.now() + 3 * weekInSeconds,
    recallFive: Date.now() + 3 * weekInSeconds, // Need to be modified
    recallSix: Date.now() + monthInSeconds,
    recallSeven: Date.now() + (monthInSeconds + 2 * weekInSeconds),
    recallEight: Date.now() + 2 * monthInSeconds,
    recallNine: Date.now() + 3 * monthInSeconds,
    recallTen: Date.now() + 5 * monthInSeconds,
  };

  return calendar;
};

export default DemoQuestionModal;
