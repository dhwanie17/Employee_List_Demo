import React from 'react';
import Data from './Data';
function Grid() {
  return (
    <>
      <div className="cards">
        {Data.map((props) => (
          <div className="card">
            <img src={props.img} alt="myPic" className="card_img"></img>
            <span className="card_category">{props.name}</span>
            <h3 className="card_title">{props.role}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
export default Grid;
