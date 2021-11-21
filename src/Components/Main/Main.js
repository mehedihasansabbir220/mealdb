import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Main.css'

const Main = () => {
    const [meals, setMeals] = useState([]);
    // const key = '2eNaN5904T6aF8zdpKX3kuCCitIPM0gSGeQ3RwHv'
    useEffect(() => {
        fetch(`./meal.JSON`)
            .then(res => res.json())
            .then(data => setMeals(data))

    }, [])
    return (
        <div className='main-container'>
            <div className='meal'>
                <h1>I am Main:{meals.length} </h1>{
                    meals.map(meal => <Meal
                        key={meal.phone}
                        meal={meal}
                    ></Meal>)
                }
            </div>
            <div>
                <h4>I am Cart </h4>
            </div>
        </div>
    );
};

export default Main;