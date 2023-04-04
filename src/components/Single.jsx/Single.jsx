import React from 'react';

const Single = (props) => {

    let Single = props.Single

    let { strArea, idMeal, strCategory, strMealThumb, strMeal } = Single
    return (
        <div className='w-[400px] h-[500px] mt-5 rounded-lg relative shadow-xl border-2 '>
            <div>
                <img className='h-64 p-2 rounded-lg w-full' src={strMealThumb} alt="" />
            </div>
            <div className='ml-5 mt-5 '>
                <p className='text-lg pt-3 '>strArea: {strArea}</p>
                <p className='text-lg pt-3 '>strCategory: {strCategory}</p>
                <p className='text-lg pt-3 '>strMeal: {strMeal}</p>
            </div>
            <div>
                <button className='w-full bg-orange-400 absolute py-3 bottom-0'>add to cart</button>
            </div>
        </div>
    );
};

export default Single;