import React from 'react';

export function GifGridItem({ id, title, url }) {

    return (
        <div className='card animate__animated animate__fadeInDownBig'>
            <img src={ url } />
            <p>{title}</p>
        </div>
    );
};
