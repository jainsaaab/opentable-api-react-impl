import React from 'react';

const restaurantItem = (props) => {
    return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
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
          </ul>
        </div>
        <div className='card-back'>

        </div>
      </div>
    </div>
    )
}

export default restaurantItem;