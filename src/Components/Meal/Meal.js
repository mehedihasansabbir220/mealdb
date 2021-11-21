import React from 'react';
import './meal.css'

const Meal = (props) => {
    console.log(props.meal);
    const { about, gender, name, picture, } = props.meal;
    return (
        <div className='meal'>
            <img src={picture} alt="" />
            {/* <div>
                <h4>{about}</h4>
                <h6>{gender}</h6>
                <p>{name}</p>
            </div> */}
        </div>
    );
};

export default Meal;