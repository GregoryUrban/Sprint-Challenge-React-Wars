import React from 'react';

const Character = (props) => {
    return (
        // why cant I map over these - seems very unDRY - Ideally I should be able to reference each
        // item in an array bu their order number - but if I could do that 
        //then what would be the purpose of this class component?
    <div className='character'>
    <div className='characterInfo'><h4>Name: {props.character.name}</h4></div>
    <div className='characterInfo'>Hair Color: {props.character.hair_color}</div>
    <div className='characterInfo'>Gender: {props.character.gender}</div>
    <div className='characterInfo'>Birth Year: {props.character.birth_year}</div>
    </div>
    );
};


export default Character;