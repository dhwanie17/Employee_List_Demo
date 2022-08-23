import React from 'react';
import Data from './Data';

function List() {
  return (
    <>
      <table class="table table-striped pretty">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Join Date</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((props) => (
            <tr>
              <td>
                <div className="image">
                  <img
                    src={props.img}
                    className="rounded-circle circle"
                    alt="Avatar"
                  />
                  <span className="name">{props.name}</span>
                </div>
              </td>
              <td>{props.id}</td>
              <td>{props.email}</td>
              <td>{props.number}</td>
              <td>{props.date}</td>
              <td>{props.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
