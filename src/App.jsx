// import {useState} from 'react'
import { useState } from 'react';
import Modal from './components/Modal';
function App() {
  const [modalIsOpen, setIsOpen] = useState(true);
  return (
    <div className="app">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="btn btn-primary" onClick={()=>setIsOpen(true)}>
            Уведомления
          </button>
        </div>
      </div>
     <Modal modalIsOpen = {modalIsOpen} setIsOpen = {setIsOpen}/>
    </div>
  );
}

export default App