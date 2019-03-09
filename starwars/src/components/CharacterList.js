import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
    return (
        // classname forBlur is for a frosted-pane design. 
        <div className='forBlur'> 
            {props.characters.map(character => (
                <Character character={character} key={character.edited} />
            ))}
        </div>
    )
}

export default CharacterList;