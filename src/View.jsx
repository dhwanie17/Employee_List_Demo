import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faTh } from '@fortawesome/free-solid-svg-icons';
import Grid from './Grid';
import List from './List';
import Form from './Form';

function View() {
  const [active, setActive] = useState('List');
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <h5>Employee</h5>
      <div className="right">
        <span>
          <FontAwesomeIcon
            onClick={() => {
              setActive('Grid');
            }}
            className="square"
            icon={faTh}
          ></FontAwesomeIcon>
        </span>
        <span>
          <FontAwesomeIcon
            onClick={() => {
              setActive('List');
            }}
            className="square"
            icon={faAlignJustify}
          ></FontAwesomeIcon>
        </span>
        <button type="button" class=" btnn" onClick={togglePopup}>
          + Add Employee
        </button>
      </div>
      {active === 'List' && <List />}
      {active === 'Grid' && <Grid />}
      {isOpen && <Form handleClose={togglePopup} />}
      {/* {active === 'Form' && <Form />} */}
    </div>
  );
}

export default View;
