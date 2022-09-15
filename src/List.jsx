import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import Form from './Form';

let employee = JSON.parse(localStorage.getItem('employee')) || [];

function List() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const togglePopup = (id) => {
    setIsOpen(!isOpen);
    localStorage.setItem(
      'employee',
      JSON.stringify(employee.filter((emp) => emp.nid !== id))
    );
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

  return (
    <>
      <table class="table table-striped pretty" id="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Join Date</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((props) => (
            <tr key={props.nid}>
              <td>
                <div className="image">
                  <img
                    src="./Images/d9ea535b1c8b7f85cb82cb1519171954.jpeg"
                    className="rounded-circle circle"
                    alt="Avatar"
                  />
                  <span className="name">{props.name}</span>
                </div>
              </td>
              <td>{props.id}</td>
              <td>{props.email}</td>
              <td>{props.phone}</td>
              <td>{props.date}</td>
              <td>{props.designation}</td>
              <td>
                <div class="dropdown">
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    class="dropdown-toggle icon"
                    data-bs-toggle="dropdown"
                  >
                    Dropdown button
                  </FontAwesomeIcon>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        class="dropdown-item"
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
                        class="dropdown-item"
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
              </td>
            </tr>
          ))}
        </tbody>
        {isOpen && (
          <Form handleClose={togglePopup} selectedUser={selectedUser} />
        )}
      </table>
    </>
  );
}

export default List;
