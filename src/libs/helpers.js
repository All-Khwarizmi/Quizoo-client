/* console.log(Date());
console.log(Date.now()); */

// Function that takes memo and student id's, looks if there is a memoDate, either returns {lastDate, calendar, lastRecall}  or returns false

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

/* function that takes lastDate, calendar and nextRecallDay (that needs to be aded to the memo date squema and model: 
    model mongoose: {nextRecallDay: recallOne}
    graphql schema: nextRecallDay : {type: GrapheQLNonNull(GraphQLString)} 
    update queries and mutations !!!
    */

// Function that tells if its time to take a particular memo
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

// function that creates a returns a planning of memos days revision from Date.now()
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

  return calendar;
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

/* ====================== Memo Filtering Component =========================== */

// On fiches's page Memos are filtered as follows:
// There're two icons for three sitations:
// newIcon : no memoDate yet ==> points
// puntosIcon: not new && isMemoTime() = true ==> points
// ___ : not new && isMemoTime() = false no points

// TOODO : create state for icons that might be used by button validation

// So the filtering system could be as follows :
// for each memo
const isPuntos = () => {
  const memoDate = isMemoDate("memoId", "studentId");

  if (!memoDate || isMemoTime(memoDate)) {
    return true;
  } else {
    return false;
  }
};


