import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export function GifExpertApp() {

    const [categories, setCategories] = useState(['Javascript']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return (<GifGrid
                            key={category}
                            category={category}
                        />)
                    })
                }
            </ol>

        </>
    );
};
