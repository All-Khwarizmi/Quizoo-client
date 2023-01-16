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
    $memoId: ID!, 
    $memoName: String!,
    $studentId: ID!, 
    $studentName: String!,
    $lastDate: Int!,
    $calendar: Calendar!) {
    addMemoDate(
      memoId: $memoId, 
      memoName: $memoName,
      studentId: $studentId,
      studentName: $studentName,
      lastDate: $lastDate,
      calendar: $calendar,
      ) {
      id
      name
      score
      memoName
      studentName
      lastDate
      calendar {
        day1
        day2
        day3
        day4
        day5
        day6
        day7
        day8
        day9
        day10
    }
  }
}
`;
const UPDATE_MEMO_DATE = gql`
  mutation updateMemoDate($id: ID!, $lastDate: Int!)  {
    updateMemoDate(id: $id, lastDate: $lastDate) {
      id
      memoName
      studentName
      lastDate
    }
  }
`;

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
