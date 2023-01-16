import React from 'react'
import { Link } from 'react-router-dom';

const Question = ({ newQuestion, id, number }) => {
  return (
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
                    <button className='btn btn-primary'>
                      {newQuestion.answerA}
                    </button>{' '}
                  </div>
                  <div className='col'>
                    {' '}
                    <button className='btn btn-primary'>
                      {newQuestion.answerA}
                    </button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    {' '}
                    <button className='btn btn-primary'>
                      {newQuestion.answerA}
                    </button>{' '}
                  </div>
                  <div className='col'>
                    {' '}
                    <button className='btn btn-primary'>
                      {newQuestion.answerA}
                    </button>{' '}
                  </div>
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question