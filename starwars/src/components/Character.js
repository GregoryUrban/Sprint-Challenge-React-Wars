import React from 'react';

const Character = (props) => {
    return (
    <div className='character'>
    <div className='characterInfo'>Name: {props.character.name}</div>
    <div className='characterInfo'>Hair Color: {props.character.hair_color}</div>
    <div className='characterInfo'>Gender: {props.character.gender}</div>
    <div className='characterInfo'>Birth Year: {props.character.birth_year}</div>
    </div>
    );
};


export default Character;