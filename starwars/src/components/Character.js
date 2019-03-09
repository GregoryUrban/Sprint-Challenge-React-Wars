import React from 'react';

const Character = () => {
    return (
    <div className='character'>
    <div className='characterInfo'>Name: {this.state.character.name}</div>
    <div className='characterInfo'>Hair Color: {this.state.character.hair_color}</div>
    <div className='characterInfo'>Gender: {this.state.character.gender}</div>
    <div className='characterInfo'>Birth Year: {this.state.character.birth_year}</div>
    </div>
    );
};


export default Character;