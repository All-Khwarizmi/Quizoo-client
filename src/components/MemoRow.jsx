import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { DELETE_MEMO } from '../mutations/memoMutations';
import { GET_MEMO_DATES } from '../queries/memoQueries';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useMutation, useQuery } from '@apollo/client';
import { MdOutlineFiberNew } from 'react-icons/md';
import Spinner from './Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Puntos from './Puntos';
import New from './New';

const MemoRow = ({ fiche, student }) => {
  const [isMemoDateState, setIsMemoDateState] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { loading, error, data } = useQuery(GET_MEMO_DATES, {
    variables: { memoId: fiche.id, studentId: student[0].id },
  });

  const [deleteMemo] = useMutation(DELETE_MEMO, {
    variables: { class: fiche.class },
    // First way to update de UI when fiche is deleted but could lead to fetch too much
    //refetchQueries: [{ query: DELETE_MEMO }],

    // Other way with the cache
    update(cache, { data: { deleteMemo } }) {
      const { fiches } = cache.readQuery({
        query: DELETE_MEMO,
      });
      cache.writeQuery({
        query: DELETE_MEMO,
        data: {
          fiches: fiches.filter((fiche) => fiche.id !== deleteMemo.id),
        },
      });
    },
  });
  if (loading) return <Spinner />;
  if (error) {
    console.log(JSON.stringify(error), student[0].id);
    return <p>Something Went Wrong</p>;
  }
  const memoDate = data.getMemoDate[0];
  // console.log(memoDate.nextRecallDay)
  if (!memoDate) {
    console.log('No memoDate in MemoRow', data, student.id, fiche.id);
  } else {
    console.log(
      'Got memoDate in MemoRow',
      memoDate.calendar,
      student.id,
      fiche.id
    );
  }
  return (
    <>
      {!loading && !error && (
        <Col className='p-2'>
          <Card>
            <Card.Body>
              <Container>
                <Row className='row gx-3'>
                  <Col>
                    {' '}
                    <Card.Title
                      style={{
                        fontSize: '1.5rem',
                        color: 'black',
                        fontStyle: 'bold',
                      }}
                    >
                      {fiche.name}
                    </Card.Title>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className='row gx-3'>
                  <Col>{!memoDate ? <New /> : null} </Col>
                </Row>
              </Container>
              <Container>
                <Row className='row gx-3'>
                  <Col>
                    {!memoDate ? (
                      <Puntos />
                    ) : isPoints(memoDate) ? (
                      <Puntos />
                    ) : null}
                  </Col>
                </Row>
              </Container>
            
              <Container>
                <Row className='row gx-3'>
                  <Col></Col>
                </Row>
              </Container>
              <Container>
                <Row className='row gx-3'>
                  <Col>
                    <Link to={`/fiches/:${fiche.id}/1`}>
                      <button className='btn btn-secondary'>Play Memo</button>
                    </Link>
                  </Col>
                </Row>
              </Container>

              <Card.Text>
                {memoDate ? (
                  <>
                    <>{`Last recall ${daysFromLastRecall(
                      memoDate
                    )} days ago`}</>
                    <> {`Next recall in ${nextRecallDay(memoDate)} days`}</>
                  </>
                ) : null}
              </Card.Text>
              
            </Card.Body>
            {student.class == 'admin' ? (
              <button onClick={deleteMemo} className='btn btn-danger btn-sm'>
                <FaTrash />
              </button>
            ) : null}
          </Card>
        </Col>
      )}
    </>
  );
};

const isMemoDate = (memoDate) => {
  if (memoDate) {
    const lastDate = memoDate.lastDate;
    const calendar = memoDate.calendar;
    const nextRecallDay = memoDate.nextRecallDay;

    return { lastDate, calendar, nextRecallDay };
  } else {
    console.log('No memoDate in MemoRow');

    return false;
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
const daysFromLastRecall = (memoDate) => {
  const time = Math.round((Date.now() - memoDate.lastDate) / 60 / 60 / 24)
    .toString()
    .split('')[0];
  return time;
};

// TODO : make memo's from client with calendar
const nextRecallDay = (memoDate) => {
  const nextRecallDay = memoDate.nextRecallDay;
  const value = memoDate.calendar[nextRecallDay];

  const time = Math.round((value - Date.now()) / 60 / 60 / 24)
    .toString()
    .split('')[0];
  console.log(time, memoDate.calendar[nextRecallDay]);
  return time;
};

export default MemoRow;
