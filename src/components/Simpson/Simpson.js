import React from 'react';

const Simpson = ({name,surname,image}) => {
    return (
        <div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <img src={image} alt={ name}/>
        </div>
    );
};

export {Simpson};