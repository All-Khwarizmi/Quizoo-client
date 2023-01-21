import React from 'react';

const QuestionInput = ({
  objValue,
  index,
  onChange,
  deleteField,
  handleChangeResponse,
  handleChangeResponseA,
  handleChangeResponseB,
  handleChangeResponseC,
  handleChangeResponseD,
  handleChangeMemoName,
  handleChangeMemoClass,
}) => {
  const {
    memoName,
    memoClass,
    question,
    correctAnswer,
    answerA,
    answerB,
    answerC,
    answerD,
  } = objValue;
  return (
    <div className='mb-3'>
      <label htmlFor='Memo Name' className='form-label'>
        Memo Name
      </label>
      <input
        type='text'
        className='form-control'
        id='Memo Name'
        aria-describedby='Memo Name'
        value={memoName || ''}
        onChange={(e) => {
          return handleChangeMemoName(e, index);
        }}
      />
      <label htmlFor='Memo Class' className='form-label'>
        Memo Class
      </label>
      <input
        type='text'
        className='form-control'
        id='Memo Class'
        aria-describedby='Memo Class'
        value={memoClass || ''}
        onChange={(e) => {
          return handleChangeMemoClass(e, index);
        }}
      />
      <label htmlFor={`Question ${index + 1}`} className='form-label'>
        {`Question ${index + 1}`}
      </label>
      <input
        type='text'
        className='form-control'
        id='question'
        aria-describedby='memo name'
        value={question || ''}
        onChange={(e) => onChange(e, index)}
      />
      <label htmlFor='Correct Answer' className='form-label'>
        Correct Answer
      </label>
      <input
        type='text'
        className='form-control'
        id='CorrectAnswer'
        aria-describedby='Correct Answer'
        value={correctAnswer || ''}
        onChange={(e) => {
          return handleChangeResponse(e, index);
        }}
      />
      <label htmlFor='AnswerA' className='form-label'>
        Answer A
      </label>
      <input
        type='text'
        className='form-control'
        id='AnswerA'
        aria-describedby='AnswerA'
        value={answerA || ''}
        onChange={(e) => handleChangeResponseA(e, index)}
      />
      <label htmlFor='AnswerB' className='form-label'>
        Answer B
      </label>
      <input
        type='text'
        className='form-control'
        id='answerB'
        aria-describedby='AnswerB'
        value={answerB || ''}
        onChange={(e) => handleChangeResponseB(e, index)}
      />
      <label htmlFor='AnswerC' className='form-label'>
        Answer C
      </label>
      <input
        type='text'
        className='form-control'
        id='answerC'
        aria-describedby='AnswerC'
        value={answerC || ''}
        onChange={(e) => handleChangeResponseC(e, index)}
      />
      <label htmlFor='Answer D' className='form-label'>
        Answer D
      </label>
      <input
        type='text'
        className='form-control'
        id='answerD'
        aria-describedby='Answer D'
        value={answerD || ''}
        onChange={(e) => handleChangeResponse(e, index)}
      />
      <div onClick={(e) => deleteField(e, index)}>X</div>
    </div>
  );
};

export default QuestionInput;
