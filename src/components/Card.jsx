import React, { useState } from 'react';
import CardModal from './CardModal';

const Card = ({ numberOfQuestions, newQuestion, id, number }) => {
  return (
    <>
      <CardModal
        numberOfQuestions={numberOfQuestions}
        newQuestion={newQuestion}
        id={id}
        number={number}
      />
    </>
  );
};

export default Card;
