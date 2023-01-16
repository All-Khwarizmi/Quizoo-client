import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';


const AddMemoModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
/* 
  const [addClient] = useMutation(null, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({
        query: null,
      });
      cache.writeQuery({
        query: null,
        data: {
          clients: clients.concat([addClient]),
        },
      });
    },
  }); */

  /* const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || phone === '') {
      return alert('Please fill alm the fields');
    }
    addClient(name, email, phone);
    setName('');
    setEmail('');
    setPhone('');
  }; */

  return (
    <>
      
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Memo
</button>


<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default AddMemoModal;
