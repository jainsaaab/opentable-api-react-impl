import React from 'react';

const restaurantItem = (props) => {
  const getPrice = (n) => {
    let p = "";
    for(let i=0; i<n; i++) {
      p += "$";
    }

    return p;
  }

  return (
    <div className='card'>
          <h1>{props.item.name}</h1>
          <ul>
            <li>
              <strong>Address:</strong> {props.item.address}
            </li>
            <li>
              <strong>City:</strong> {props.item.city}
            </li>
            <li>
              <strong>Area:</strong> {props.item.area}
            </li>
            <li>
              <strong>Phone:</strong> {props.item.phone}
            </li>
            <li>
              <strong>Price:</strong> {getPrice(props.item.price)}
            </li>
          </ul>
    </div>
  )
}

export default restaurantItem;