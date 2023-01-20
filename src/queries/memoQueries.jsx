import { gql } from '@apollo/client';

const GET_STUDENT = gql`
  query getStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      class
      score
      email
      userName
    }
  }
`;
const GET_FICHE = gql`
  query getFiche($id: ID!) {
    getFiche(id: $id) {
      id
      name
      class
      question {
        id
        number
        question
        correctAnswer
        answerA
        answerB
        answerC
        answerD
        memoName
        memoId
      }
    }
  }
`;
const GET_FICHES_WQ = gql`
  query getFichesClass($class: String!) {
    getFichesClass(class: $class) {
      id
      name
      class
      question {
        id
        question
        correctAnswer
        answerA
        answerB
        answerC
        answerD
      }
    }
  }
`;
const GET_FICHES_CLASS = gql`
  query getFichesClass($class: String!) {
    getFichesClass(class: $class) {
      id
      name
      class
    }
  }
`;
const GET_MEMO_DATES = gql`
  query getMemoDate($memoId: ID!, $studentId: ID!) {
    getMemoDate(memoId: $memoId, studentId: $studentId) {
      memoName
      studentName
      calendar {
        recallOne
        recallTwo
        recallThree
        recallFour
        recallFive
        recallSix
        recallSeven
        recallEight
        recallNine
        recallTen
      }
      lastDate
      nextRecallDay
      id
      
    }
  }
`;

export { GET_FICHES_CLASS, GET_FICHES_WQ, GET_STUDENT, GET_FICHE, GET_MEMO_DATES };
