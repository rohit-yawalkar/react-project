import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleDelete() {
    setModalIsOpen(true)
  }

  function closeModelHandler() {
    setModalIsOpen(false)
  }

  return (
    <div className='card'>
      <h2>{ props.title }</h2>
      <div className='actions'>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
        {/* if we do deleteHandler() function will be executed just after component rendered if we do deleteHandler only be called on event click */}
      </div>
      {
        modalIsOpen &&
        <>
          <Modal onCancel={ closeModelHandler } onConfirm={ closeModelHandler } /> {/* handleDelete don't here because Modal is not build in component */}
          <Backdrop onCancel={ closeModelHandler }/>
        </>
      }
    </div>
  )
}

export default Todo