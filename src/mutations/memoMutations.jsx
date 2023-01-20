import { gql } from '@apollo/client';

const ADD_MEMO = gql`
  mutation addMemo($name: String!, $email: String!, $phone: String!) {
    addMemo(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;
// TODO + delete questions aswell
const DELETE_MEMO = gql`
  mutation deleteClient($id: ID!) {
    deleteMemo(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
const ADD_QUESTION = gql`
  mutation addQuestion(
    $memoId: ID!
    $number: Int!
    $question: String!
    $correctAnswer: String!
    $memoName: String!
    $answerA: String!
    $answerB: String!
    $answerC: String!
    $answerD: String!
  ) {
    addQuestion(
      memoId: $memoId
      question: $question
      number: $number
      correctAnswer: $correctAnswer
      memoName: $memoName
      answerA: $answerA
      answerB: $answerB
      answerC: $answerC
      answerD: $answerD
    ) {
      memo {
        id
        name
      }
      number
      question
      correctAnswer
    }
  }
`;
const UPDATE_STUDENT = gql`
  mutation updateScoreStudent($id: ID!, $score: Int!) {
    updateScoreStudent(id: $id, score: $score) {
      id
      name
      score
    }
  }
`;
const ADD_MEMO_DATE = gql`
  mutation addMemoDate(
    $memoId: ID!
    $memoName: String!
    $studentId: ID!
    $studentName: String!
    $nextRecallDay: String!
    $lastDate: Float!
    $calendar: recall!
  ) {
    addMemoDate(
      memoId: $memoId
      memoName: $memoName
      studentId: $studentId
      studentName: $studentName
      nextRecallDay: $nextRecallDay
      lastDate: $lastDate
      calendar: $calendar
    ) {
      id
      memoName
      studentName
      lastDate
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
    }
  }
`;
const UPDATE_MEMO_DATE = gql`
  mutation updateMemoDate($id: ID!, $lastDate: Float!, $nextRecallDay: String!)  {
    updateMemoDate(id: $id, lastDate: $lastDate, nextRecallDay: $nextRecallDay) {
      id
      memoName
      studentName
      lastDate
      nextRecallDay
    }
  }
`;
const addMemoDateVariables = {
  memoId: '63c077cc22ba681a50857ea5',
  memoName: 'El blason',
  studentId: '63c2de4c639da3634af19395',
  studentName: 'Mike',
  lastDate: 123344555,
  nextRecallDay: 'recallOne',
  calendar: {
    recallOne: 1234,
    recallTwo: 1234,
    recallThree: 1234,
    recallFour: 1234,
    recallFive: 1234,
    recallSix: 1234,
    recallSeven: 1234,
    recallEight: 1234,
    recallNine: 1234,
    recallTen: 1234,
  },
};

const addQuestionVariables = {
  memoId: '63c077cc22ba681a50857ea5',
  number: 1,
  question: "¿Qué significa 'un blasón'?",
  correctAnswer: 'Significa un escudo',
  answerA: 'Significa un escudo',
  answerB: 'Significa un animal',
  answerC: 'Significa un ser humano',
  answerD: 'Significa un alimento',
};

export { DELETE_MEMO, ADD_MEMO, UPDATE_STUDENT, ADD_QUESTION, ADD_MEMO_DATE, UPDATE_MEMO_DATE };
