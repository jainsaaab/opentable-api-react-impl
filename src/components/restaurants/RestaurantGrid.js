import React from 'react';
import RestaurantItem from './RestaurantItem'
import Spinner from '../ui/Spinner'

const restaurantGrid = (props) => {
    return props.isLoading ? 
        <Spinner />
        : 
        <section className='cards'>
            { props.items.map(item => (
            <RestaurantItem key={item.id} item={item}/>
            )) }
        </section>
}

export default restaurantGrid;