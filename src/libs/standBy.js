const { loading, error, data } = useQuery(GET_MEMO_DATES, {
  variables: { memoId: newQuestion.id, studentId: getStudent.id },
});

 const memoDate = data.getMemoDate[0];