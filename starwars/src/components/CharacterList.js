import React from 'react';
import Character from './Character';

const CharacterList = () => {
    return (
        <div className='forBlur'>
            {this.state.characters.map(character => (
                <Character character={character} key={character.edited} />
            ))}
        </div>
    )
}

export default CharacterList;