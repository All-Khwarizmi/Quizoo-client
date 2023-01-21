import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import LoginButton from '../auth/LoginButton';

const DemoSuccessModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const calendar = createCalendar();
  const {
    recallOne,
    recallTwo,
    recallThree,
    recallFour,
    recallFive,
    recallSix,
    recallSeven,
    recallEight,
    recallNine,
    recallTen,
  } = calendar;
  const calendarClient = (day) => {
    // Days from now
    /* const time = Math.round((day - Date.now()) /  1000 / 60 / 60 / 24)
      .toString()
      .split('').splice(0);
    return time */
    const time = new Date(day);
    return time.toDateString();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You're on your way to Memo mastery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
            <strong>
              In order to strengthen your neuronal network we suggest you to
              take this test according to the following schedule
            </strong>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Recall Day</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> {calendarClient(recallOne)} </td>
              </tr>
              <tr>
                <td>2</td>
                <td> {calendarClient(recallTwo)} </td>
              </tr>
              <tr>
                <td>3</td>
                <td> {calendarClient(recallThree)} </td>
              </tr>
              <tr>
                <td>4</td>
                <td> {calendarClient(recallFour)} </td>
              </tr>
              <tr>
                <td>5</td>
                <td> {calendarClient(recallFive)} </td>
              </tr>
              <tr>
                <td>6</td>
                <td> {calendarClient(recallSix)} </td>
              </tr>
              <tr>
                <td>7</td>
                <td> {calendarClient(recallSeven)} </td>
              </tr>
              <tr>
                <td>8</td>
                <td> {calendarClient(recallEight)} </td>
              </tr>
              <tr>
                <td>9</td>
                <td> {calendarClient(recallNine)} </td>
              </tr>
              <tr>
                <td>10</td>
                <td> {calendarClient(recallTen)} </td>
              </tr>
            </tbody>
          </Table>
          <div className='p-3'>
            <strong>
              No worries, we will handle everything. You just have to login.
            </strong>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/'}>
            <Button variant='secondary' onClick={handleClose}>
              Go Back
            </Button>
          </Link>

          <LoginButton />
        </Modal.Footer>
      </Modal>
    </>
  );
};

const createCalendar = () => {
  // How many seconds in a day
  const now = new Date();
  const dayInSeconds = 1000 * 60 * 60 * 24;
  const weekInSeconds = 1000 * 60 * 60 * 24 * 7;
  const monthInSeconds = 1000 * 60 * 60 * 24 * (365 / 12);
  const calendar = {
    recallOne: Date.now() + 3 * dayInSeconds,
    recallTwo: Date.now() + weekInSeconds,
    recallThree: Date.now() + 10 * dayInSeconds,
    recallFour: Date.now() + 2 * weekInSeconds,
    recallFive: Date.now() + 3 * weekInSeconds, // Need to be modified
    recallSix: Date.now() + monthInSeconds,
    recallSeven: Date.now() + (monthInSeconds + 2 * weekInSeconds),
    recallEight: Date.now() + 2 * monthInSeconds,
    recallNine: Date.now() + 3 * monthInSeconds,
    recallTen: Date.now() + 5 * monthInSeconds,
  };

  return calendar;
};

export default DemoSuccessModal;
