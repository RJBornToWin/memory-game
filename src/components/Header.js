import React from 'react';

function Header({turns, onShuffle}){
    return (
        <div>
            <h2 className='header'>Match the tiles!</h2>
            <div>
                <p className='turns'>Turns : {turns} / 15 </p>
            </div>
            <button onClick={onShuffle}>Restart</button>
        </div>
    )
}

export default Header;