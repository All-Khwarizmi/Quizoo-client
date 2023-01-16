import React from 'react';
import Spinner from './Spinner';

const useQueryHandler = (loading, error) => {
  if (loading) {
    return (
      <div className='container'>
        <Spinner />
      </div>
    );
  } else if (error) {
    return (
      <div className='container'>
        <h1>Something Went Wrong</h1>
      </div>
    );
  }
};

export default useQueryHandler;
