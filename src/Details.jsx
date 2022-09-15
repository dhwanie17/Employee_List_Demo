import React from 'react';

let employee = JSON.parse(localStorage.getItem('employee')) || [];

function Details(props) {
  return (
    <>
      <div className="container2">
        <div className="box">
          <span className=" closes top" onClick={props.handleClose}>
            &times;
          </span>
          <div className="left">
            <img
              src="./Images/d9ea535b1c8b7f85cb82cb1519171954.jpeg"
              alt="myPic"
              className="card_img_detail"
            ></img>
            <div className="col">
              <h1 className="font">John Doe</h1>
              <h3 className="gray"> Web Development</h3>
              <br></br>
              <h3 className="gray"> Web Designer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
