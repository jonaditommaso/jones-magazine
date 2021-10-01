import React from 'react';
// import '../styles/signUp/signUp.css';

function TextError({children}) {
    return (
        <div className='error'>
            {children}
        </div>
    );
}

export default TextError;