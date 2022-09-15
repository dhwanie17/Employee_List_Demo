import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import Form from './Form';
import Details from './Details';
import { Link } from 'react-router-dom';

let employee = JSON.parse(localStorage.getItem('employee')) || [];

function Grid() {
  const [isShown, setIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const togglePopup = (id) => {
    setIsOpen(!isOpen);
    const editData = employee.find((x) => {
      return x.nid === id;
    });
    console.log(editData);
    id ? setSelectedUser(editData) : setSelectedUser(null);
  };
  const deleteRow = (id) => {
    localStorage.setItem(
      'employee',
      JSON.stringify(employee.filter((emp) => emp.nid !== id))
    );
    window.location.reload(true);
  };
  const handleClick = (event) => {
    setIsShown(!isShown);
  };
  return (
    <>
      <div className="cards">
        {employee.map((props) => (
          <div className="card" onClick={handleClick}>
            <div className="inline">
              <span>
                <div className="dropdown">
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="dropdown-toggle icon"
                    data-bs-toggle="dropdown"
                  >
                    Dropdown button
                  </FontAwesomeIcon>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => togglePopup(props.nid)}
                      >
                        <FontAwesomeIcon
                          className="padding"
                          icon={faEdit}
                        ></FontAwesomeIcon>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => deleteRow(props.nid)}
                      >
                        <FontAwesomeIcon
                          className="padding"
                          icon={faTrash}
                        ></FontAwesomeIcon>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <div className="column">
              <img
                src="./Images/d9ea535b1c8b7f85cb82cb1519171954.jpeg"
                alt="myPic"
                className="card_img"
              ></img>
              <span className="card_category">{props.name}</span>
              <h3 className="card_title">{props.designation}</h3>
            </div>
          </div>
        ))}
        {isOpen && (
          <Form handleClose={togglePopup} selectedUser={selectedUser} />
        )}
        {isShown && <Details handleClose={handleClick} />}
      </div>
    </>
  );
}
export default Grid;
