import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { ADD_MEMO, ADD_QUESTION } from '../mutations/memoMutations';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import QuestionInput from './QuestionInput';

const AddMemoModal = () => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState([]);
  const [toggle, setToggle] = useState(false);
 const [addMemo] = useMutation(ADD_MEMO)
 const [addQuestion] = useMutation(ADD_QUESTION)
  const inputRef = useRef();

  const addMemoQuestion = () => {

  }

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].question = e.target.value;
    setFormValues(values);
  };
  const handleChangeMemoName = (e, index) => {
    const values = [...formValues];
    values[index].memoName = e.target.value;
    setFormValues(values);
  };
  const handleChangeMemoClass = (e, index) => {
    const values = [...formValues];
    values[index].memoClass = e.target.value;
    setFormValues(values);
  };
  console.log(formValues);
  const handleChangeResponse = (e, index) => {
    const values = [...formValues];
    values[index].correctAnswer = e.target.value;
    setFormValues(values);
    
  };
  const handleChangeResponseA = (e, index) => {
    const values = [...formValues];
    values[index].answerA = e.target.value;
    setFormValues(values);
    
  };
  const handleChangeResponseB = (e, index) => {
    const values = [...formValues];
    values[index].answerB = e.target.value;
    setFormValues(values);
    
  };
  const handleChangeResponseC = (e, index) => {
    const values = [...formValues];
    values[index].answerC = e.target.value;
    setFormValues(values);
    
  };
  const handleChangeResponseD = (e, index) => {
    const values = [...formValues];
    values[index].answerD = e.target.value;
    setFormValues(values);
    
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
      memoName: "",
      memoClass: "user",
      question: "",
      correctAnswer: "",
      answerA: "",
      answerB: "",
      answerC: "",
      answerD: "",

    });
    setFormValues(values);
    setToggle(false);
  };

  const handleDeleteField = (e, index) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  };

  const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const formData =  formValues.map((val) => {
        return { 
          "memoName": val.memoName,
          "class": val.memoClass,
          "question": val.question,
          "correctAnswer": val.correctAnswer,
          "answerA": val.answerA,
          "answerB": val.answerB,
          "answerC": val.answerC,
          "answerD": val.answerD,
          
         };
      })

    ;
  };

  const handleClose = () => {
     setShow(false);
  };
  const handleShow = () => setShow(true);

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
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Memo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            
            <div className='mb-3'>
              {formValues.map((obj, index) => (
                <QuestionInput
                  key={index}
                  objValue={obj}
                  onChange={handleChange}
                  index={index}
                  deleteField={handleDeleteField}
                  handleChangeResponse={handleChangeResponse}
                  handleChangeResponseA={handleChangeResponseA}
                  handleChangeResponseB={handleChangeResponseB}
                  handleChangeResponseC={handleChangeResponseC}
                  handleChangeResponseD={handleChangeResponseD}
                  handleChangeMemoName={handleChangeMemoName}
                  handleChangeMemoClass={handleChangeMemoClass}
                />
              ))}
              <div className='dialog-box'>
                <button className='btn btn-primary' onClick={handleAddField}>
                  Add
                </button>
              </div>
              <button
                variant='primary'
                type='submit'
                className='btn btn-primary'
              >
                Add Memo
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMemoModal;
