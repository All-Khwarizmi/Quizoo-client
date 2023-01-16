import React from 'react';
import {Link} from "react-router-dom"
import { FaTrash } from 'react-icons/fa';
import { DELETE_MEMO } from '../mutations/memoMutations';

import { useMutation } from '@apollo/client';


const MemoRow = ({ fiche, student }) => {
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
  return (
    
      <tr>
      <td><a href={`/fiches/:${fiche.id}/1`} >{fiche.name} </a> </td>
      <td>{fiche.class}</td>
      <td>{fiche.id}</td>
      <td>
        <button onClick={deleteMemo} className='btn btn-danger btn-sm'>
          <FaTrash />
        </button>
      </td>
    </tr>
   
  );
};

export default MemoRow;
