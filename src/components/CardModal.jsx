import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation, useQuery } from '@apollo/client';
import {
  UPDATE_STUDENT,
  ADD_MEMO_DATE,
  UPDATE_MEMO_DATE,
} from '../mutations/memoMutations';
import { UserContext } from '../libs/studentContext';
import Spinner from './Spinner';
import { GET_MEMO_DATES } from '../queries/memoQueries';

const CardModal = ({ numberOfQuestions, newQuestion, id, number }) => {
  const { getStudent } = React.useContext(UserContext);
  const [show, setShow] = useState(true);
  const [succes, setSucess] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(newQuestion.correctAnswer);
  const [answerA, setAnswerA] = useState(newQuestion.answerA);
  const [classA, setClassA] = useState('btn btn-primary');
  const [classB, setClassB] = useState('btn btn-primary');
  const [classC, setClassC] = useState('btn btn-primary');
  const [classD, setClassD] = useState('btn btn-primary');
  const [answerB, setAnswerB] = useState(newQuestion.answerB);
  const [answerC, setAnswerC] = useState(newQuestion.answerC);
  const [answerD, setAnswerD] = useState(newQuestion.answerD);
  let link = `/fiches/:${id}/${parseInt(number) + 1}`;
  const [lastQuestionRedirect, setLastQuestionRedirect] = useState({ link });
  useEffect(() => {
    setAnswerA(newQuestion.answerA);
    setAnswerB(newQuestion.answerB);
    setAnswerC(newQuestion.answerC);
    setAnswerD(newQuestion.answerD); 
    if (parseInt(number) === numberOfQuestions) {
      const link = '/fiches';
      setLastQuestionRedirect({ link });
    } else {
      let link = `/fiches/:${id}/${parseInt(number) + 1}`;
      setLastQuestionRedirect({ link });
    }
  }, [number, id, numberOfQuestions]);
  const [updateMemoDate] = useMutation(UPDATE_MEMO_DATE);
  const [updateStudent] = useMutation(UPDATE_STUDENT);
  const [addMemoDate] = useMutation(ADD_MEMO_DATE);
  
  const { loading, error, data } = useQuery(GET_MEMO_DATES, {
    variables: { memoId: newQuestion.memoId, studentId: getStudent[0].id },
  });

  if (loading) return <Spinner />;
  if (error)  {
    console.log(JSON.stringify(error))
    return <p>Something Went Wrong</p>;
  };

  const calendar = createCalendar();
 
  const memoDate = data.getMemoDate[0];
   const nextRecallDay = getNextRecallDay("recallTwo");


  const clickA = () => {
    if (answerA === correctAnswer) {
      showToastMessageSucess();
      setSucess(true);
      setClassA('btn btn-success');
      setClassB('btn btn-danger');
      setClassC('btn btn-danger');
      setClassD('btn btn-danger');

      // Once cliked disabled it somehow
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
  // console.log(newQuestion);

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

    if (parseInt(number) === numberOfQuestions) {
      /* ====================== Memo Validation Button Component =========================== */

      // When its the last question is true, clicking the save Memo button triggers this...
      // Add state for icons and call mutations depending on it
      // Add state for score to be updated on each question and then update student score

      const isDate = isMemoDate(memoDate);
      console.log(isDate);
      // Component logic for creating or updating memodate
      if (memoDate) {
        const nextRecallDay = getNextRecallDay(memoDate.nextRecallDay);
        updateMemoDate({
          variables: {
            lastDate: Date.now(),
            id: memoDate.id,
            studentId: getStudent.id,
            nextRecallDay,
          },
        });
        if (isPoints(memoDate)) {
          updateStudent({
            variables: { id: getStudent.id, score: getStudent.score + 50 },
          });
        }
      } else {
        const calendar = createCalendar();

        try {
          addMemoDate({
            variables: {
              lastDate: Date.now(), // Dont think we need this one. maybe to know when its the last time!
              memoId: id,
              studentId: getStudent.id,
              memoName: newQuestion.memoName,
              studentName: getStudent.name,
              nextRecallDay: 'recallOne',
              calendar: calendar,
            },
          });
          updateStudent({
            variables: { id: getStudent.id, score: getStudent.score + 50 },
          });
          
        } catch (error) {
          console.log(JSON.stringify(error));
        }
      }
      
    }
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
          <div className='container text-center '>
            <div className='row'>
              <div className='col'>
                <div className='card'>
                  <div style={{ backgroundColor: 'lightgrey' }}>
                    <p className='question p-3'> {newQuestion.question} </p>
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
          <Link to={`/fiches/`}>
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

  return  calendar ;
};
const isMemoDate = (memoDate) => {
  if (memoDate) {
    const lastDate = memoDate.lastDate;
    const calendar = memoDate.calendar;
    const nextRecallDay = memoDate.nextRecallDay;

    return { lastDate, calendar, nextRecallDay };
  } else {
    console.log('No memoDate in CardModal');

    return false;
  }
};

// Function that takes the variable nextRecallDay and returns the after next
const getNextRecallDay = (nextRecallDay) => {
  if (nextRecallDay === 'recallTen') {
    return 'recallTen';
  } else {
    const recallDays = [
      'recallOne',
      'recallTwo',
      'recallThree',
      'recallFour',
      'recallSix',
      'recallSeven',
      'recallEight',
      'recallNine',
      'recallTen',
    ];
    const indexOfRecallDay = recallDays.indexOf(nextRecallDay);

    const nextRecallD = recallDays[indexOfRecallDay + 1];

    return nextRecallD;
  }
};
const isPoints = (memoDate) => {
  if (isMemoTime(memoDate)) {
    return true;
  } else {
    return false;
  }
};
const isMemoTime = (memoDate) => {
  // Need to determine if its time to take this particular memo or not
  // To do that we calculate  (calendar.nextRecallDay - date.now())
  // If the result its :
  //    positive number && LESS than 86400 (seconds in a day) return true
  //    positive number && MORE than 86400 (seconds in a day) return false
  //    negative number return true (memoTime has passed)
  //
  const result = memoDate.nextRecallDay - Date.now();
  let isTime;
  if (result <= 0 || (result > 0 && result <= 86400)) {
    return (isTime = true);
  } else {
    return (isTime = false);
  }
};
export default CardModal;
